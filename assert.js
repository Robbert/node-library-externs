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
 * @fileoverview Definitions for node's assert module
 * @see http://nodejs.org/api/assert.html
 * @see https://github.com/joyent/node/blob/master/lib/assert.js
 * @externs
 * @author Daniel Wirtz <dcode@dcode.io>
 */

/**
 BEGIN_NODE_INCLUDE
 var assert = require('assert');
 END_NODE_INCLUDE
 */

/**
 * @constructor
 * @param {*} value
 * @param {string} message
 * @throws {Node_assert.AssertionError}
 */
function Node_assert(value, message) {};

/**
 * @param {{message: string, actual: *, expected: *, operator: string}} options
 * @constructor
 * @extends {Error}
 */
Node_assert.prototype.AssertionError = function(options) {};

/**
 * @return {string}
 */
Node_assert.prototype.AssertionError.prototype.toString = function() {};

/**
 * @param {*} value
 * @param {string=} message
 * @throws {Node_assert.AssertionError}
 */
Node_assert.prototype.ok = function(value, message) {};

/**
 * @param {*} actual
 * @param {*} expected
 * @param {string} message
 * @param {string} operator
 * @throws {Node_assert.AssertionError}
 */
Node_assert.prototype.fail = function(actual, expected, message, operator) {};

/**
 * @param {*} actual
 * @param {*} expected
 * @param {string} message
 * @throws {Node_assert.AssertionError}
 */
Node_assert.prototype.equal = function(actual, expected, message) {};

/**
 * @param {*} actual
 * @param {*} expected
 * @param {string} message
 * @throws {Node_assert.AssertionError}
 */
Node_assert.prototype.notEqual = function(actual, expected, message) {};

/**
 * @param {*} actual
 * @param {*} expected
 * @param {string} message
 * @throws {Node_assert.AssertionError}
 */
Node_assert.prototype.deepEqual = function(actual, expected, message) {};

/**
 * @param {*} actual
 * @param {*} expected
 * @param {string} message
 * @throws {Node_assert.AssertionError}
 */
Node_assert.prototype.notDeepEqual = function(actual, expected, message) {};

/**
 * @param {*} actual
 * @param {*} expected
 * @param {string} message
 * @throws {Node_assert.AssertionError}
 */
Node_assert.prototype.strictEqual = function(actual, expected, message) {};

/**
 * @param {*} actual
 * @param {*} expected
 * @param {string} message
 * @throws {Node_assert.AssertionError}
 */
Node_assert.prototype.notStrictEqual = function(actual, expected, message) {};

/**
 * @name assert.throws
 * @function
 * @param {function()} block
 * @param {Function|RegExp|function(*)} error
 * @param {string=} message
 * @throws {Node_assert.AssertionError}
 */
// Error: .\assert.js:120: ERROR - Parse error. missing name after . operator
// assert.throws = function(block, error, message) {};

/**
 * @param {function()} block
 * @param {Function|RegExp|function(*)} error
 * @param {string=} message
 * @throws {Node_assert.AssertionError}
 */
Node_assert.prototype.doesNotThrow = function(block, error, message) {};

/**
 * @param {*} value
 * @throws {Node_assert.AssertionError}
 */
Node_assert.prototype.ifError = function(value) {};
