/*
 * Copyright 2012 The Closure Compiler Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var _, fs, vm;

_  = require('lodash')
fs = require('fs')
vm = require('vm')

var externs = [
    './os.js',
    './process.js',
    './vm.js',
    './zlib.js'
]
var externs = [];
var pattern = /\.js$/;
var files = fs.readdirSync(".");
for (var i=0; i<files.length; i++) {
    if (pattern.test(files[i])) {
        externs.push("./"+files[i]);
    }
}

var sandbox = vm.createContext({});

// Add all extern definitions to a sandboxed scope
_.forEach(externs, function (path) {
    var code = fs.readFileSync(path, { encoding: "utf-8" })
    vm.runInContext(code, sandbox)
})

var modules = {
    "os": "Node_os",
    'vm': 'Node_vm',
    'process': 'Node_process',
    'zlib': 'Node_zlib'
};

var skip = [
    "core"
];

function isPrivateProperty(identifier)
{
    return /^_.+/.test(identifier);
}


var errors = [];

_.forEach(externs, function (path) {

    // Remove file path and extension
    var name = path.replace(/^(?:.*\/)?(.+)\.js$/, "$1")

    if (_.contains(skip, name))
        return;

    try
    {
        var module = require(name);
    }
    catch (e)
    {
        errors.push("Module `" + name + "` does not exist " + path);
        return;
    }
    var extern = "Node_" + name;

    if (typeof sandbox[extern] == "undefined")
    {
        errors.push("Extern `" + extern + "` is not defined in " + path);
        return;
    }

    var expected = {
        // instance properties
        inst: sandbox[extern].prototype,
        // constructor properties
        ctor: sandbox[extern]
    }

    var actual = {
        // instance properties
        inst: module,
        // constructor properties
        ctor: module.constructor
    };

    var xor = _.xor(
        _.keys(expected.inst),
        _.keys(actual.inst)
    )
    xor = _.reject(xor, isPrivateProperty)
    xor = _.filter(xor, function (key) { return _.isFunction(expected.inst[key]) })

    // TODO: Also compare values of constants
    // TODO: Make a distinction between missing and erronneous definitions
    if (xor.length > 0)
        errors.push("The following prototype methods on require('" + name + "') do not match the current Node.js environment: " + xor.join(", "));

    var xor = _.xor(
        _.keys(expected.ctor),
        _.keys(actual.ctor)
    )
    xor = _.reject(xor, isPrivateProperty)
    xor = _.filter(xor, function (key) { return _.isFunction(expected.ctor[key]) })

    if (xor.length > 0)
        errors.push("The following constructor methods on require('" + name + "') do not match the current Node.js environment: " + xor.join(", "));
})

if (errors.length > 0)
    throw new Error(errors.join("\n"))