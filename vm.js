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

/**
 * @fileoverview Definitions for node's vm module.
 * @see http://nodejs.org/api/vm.html
 * @see https://github.com/joyent/node/blob/master/lib/vm.js
 * @externs
 * @author Daniel Wirtz <dcode@dcode.io>
 */

/**
 BEGIN_NODE_INCLUDE
 var vm = require('vm');
 END_NODE_INCLUDE
 */

/**
 * @interface
 */
function Node_vm()
{

}

/**
 * @constructor
 */
Node_vm.prototype.Context = function() {}; // Does not really exist

/**
 * @param {string} code
 * @param {string=} filename
 */
Node_vm.prototype.runInThisContext = function(code, filename) {};

/**
 * @param {string} code
 * @param {Object.<string,*>=} sandbox
 * @param {string=} filename
 */
Node_vm.prototype.runInNewContext = function(code, sandbox, filename) {};

/**
 * @param {string} code
 * @param {Node_vm.prototype.Context} context
 * @param {string=} filename
 */
Node_vm.prototype.runInContext = function(code, context, filename) {};

/**
 * @param {Object.<string,*>=} initSandbox
 * @return {Node_vm.prototype.Context}
 * @nosideeffects
 */
Node_vm.prototype.createContext = function(initSandbox) {};

/**
 * @constructor
 */
Node_vm.prototype.Script = function() {};

/**
 * @param {string} code
 * @param {string=} filename
 * @return {Node_vm.prototype.Script}
 * @nosideeffects
 */
Node_vm.prototype.createScript = function(code, filename) {};

/**
 */
Node_vm.prototype.Script.prototype.runInThisContext = function() {};

/**
 * @param {Object.<string,*>=} sandbox
 */
Node_vm.prototype.Script.prototype.runInNewContext = function(sandbox) {};
