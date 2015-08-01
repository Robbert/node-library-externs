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
 * @see https://github.com/joyent/node/blob/master/lib/punycode.js
 * @externs
 * @author Daniel Wirtz <dcode@dcode.io>
 */

/**
 BEGIN_NODE_INCLUDE
 var punycode = require('punycode');
 END_NODE_INCLUDE
 */

/**
 * @constructor
 */
function Node_punycode() {};

/**
 * @param {string} string
 * @return {string}
 */
Node_punycode.prototype.decode = function(string) {};

/**
 * @param {string} string
 * @return {string}
 */
Node_punycode.prototype.encode = function(string) {};

/**
 * @param {string} domain
 * @return {string}
 */
Node_punycode.prototype.toUnicode = function(domain) {};

/**
 * @param {string} domain
 * @return {string}
 */
Node_punycode.prototype.toASCII = function(domain) {};

/**
 * @type {Object.<string,*>}
 */
Node_punycode.prototype.ucs2 = {};

/**
 * @param {string} string
 * @return {Array.<number>}
 */
Node_punycode.prototype.ucs2.decode = function(string) {};

/**
 * @param {Array.<number>} codePoints
 * @return {string}
 */
Node_punycode.prototype.ucs2.encode = function(codePoints) {};

/**
 * @type {string}
 */
Node_punycode.prototype.version;
