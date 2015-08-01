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
 * @fileoverview Definitions for node's util module. Depends on the stream module.
 * @see http://nodejs.org/api/util.html
 * @see https://github.com/joyent/node/blob/master/lib/util.js
 * @externs
 * @author Daniel Wirtz <dcode@dcode.io>
 */

/**
 BEGIN_NODE_INCLUDE
 var util = require('util');
 END_NODE_INCLUDE
 */

/**
 * @constructor
 */
function Node_util(){};

/**
 * @param {string} format
 * @param {...*} var_args
 * @return {string}
 * @nosideeffects
 */
Node_util.prototype.format = function(format, var_args) {};

/**
 * @param {string} string
 */
Node_util.prototype.debug = function(string) {};

/**
 * @param {...*} var_args
 */
Node_util.prototype.error = function(var_args) {};

/**
 * @param {...*} var_args
 */
Node_util.prototype.puts = function(var_args) {};

/**
 * @param {...*} var_args
 */
Node_util.prototype.print = function(var_args) {};

/**
 * @param {string} string
 */
Node_util.prototype.log = function(string) {};

/**
 * @param {*} object
 * @param {{showHidden: (boolean|undefined),
 *          depth: (number|null|undefined),
 *          colors: (boolean|undefined),
 *          customInspect: (boolean|undefined)}=} options
 * @return {string}
 * @nosideeffects
 */
Node_util.prototype.inspect;

/**
 * @param {*} object
 * @return {boolean}
 * @nosideeffects
 */
Node_util.prototype.isArray = function(object) {};

/**
 * @param {*} object
 * @return {boolean}
 * @nosideeffects
 */
Node_util.prototype.isRegExp = function(object) {};

/**
 * @param {*} object
 * @return {boolean}
 * @nosideeffects
 */
Node_util.prototype.isDate = function(object) {};

/**
 * @param {*} object
 * @return {boolean}
 * @nosideeffects
 */
Node_util.prototype.isError = function(object) {};

/**
 * @param {Node_ReadableStream} readableStream
 * @param {Node_WritableStream} writableStream
 * @param {function(...)=} callback
 * @deprecated
 */
Node_util.prototype.pump = function(readableStream, writableStream, callback) {};

/**
 * @param {Function} constructor
 * @param {Function} superConstructor
 */
Node_util.prototype.inherits = function(constructor, superConstructor) {};
