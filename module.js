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
 * @fileoverview Definitions for node's punycode module.
 * @see http://nodejs.org/api/punycode.html
 * @see https://github.com/nodejs/node/blob/master/lib/module.js
 * @externs
 */

/**
 * @constructor
 */
function Node_Module() {};

/**
 * @private
 * @param {string} request
 * @param {Node_Module} parent
 * @return {string}
 */
Node_Module._resolveFilename = function(request, parent) {};

/**
 * @private
 * @param {string} content
 * @param {string} filename
 * @return {?}
 */
Node_Module.prototype._compile = function(content, filename) {};

/**
 * @type {*}
 */
Node_Module.prototype.exports;

/**
 * @param {string} id
 * @return {*}
 */
Node_Module.prototype.require = function (id) {};

/**
 * @type {string}
 */
Node_Module.prototype.filename;

/**
 * @type {boolean}
 */
Node_Module.prototype.loaded;

/**
 * @type {Node_Module}
 */
Node_Module.prototype.parent;

/**
 * @type {Array.<Node_Module>}
 */
Node_Module.prototype.children;