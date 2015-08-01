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
 * @fileoverview Definitions for node's tty module. Depends on the net module.
 * @see http://nodejs.org/api/tty.html
 * @see https://github.com/joyent/node/blob/master/lib/tty.js
 * @externs
 * @author Daniel Wirtz <dcode@dcode.io>
 */

/**
 BEGIN_NODE_INCLUDE
 var tty = require('tty');
 END_NODE_INCLUDE
 */

/**
 * @constructor
 */
function Node_tty() {};

/**
 * @param {*} fd
 * @return {boolean}
 */
Node_tty.prototype.isatty = function(fd) {};

/**
 * @param {boolean} mode
 */
Node_tty.prototype.setRawMode = function(mode) {};

/**
 * @constructor
 * @extends {Node_Socket}
 */
Node_tty.prototype.ReadStream = function() {};

/**
 * @type {boolean}
 */
Node_tty.prototype.ReadStream.prototype.isRaw;

/**
 * @param {boolean} mode
 */
Node_tty.prototype.ReadStream.prototype.setRawMode = function(mode) {};

/**
 * @constructor
 * @extends {Node_Socket}
 */
Node_tty.prototype.WriteStream = function() {};

/**
 * @type {number}
 */
Node_tty.prototype.WriteStream.prototype.columns;

/**
 * @type {number}
 */
Node_tty.prototype.WriteStream.prototype.rows;
