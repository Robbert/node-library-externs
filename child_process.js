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
 * @fileoverview Definitions for node's child_process module. Depends on the events module.
 * @see http://nodejs.org/api/child_process.html
 * @see https://github.com/joyent/node/blob/master/lib/child_process.js
 * @externs
 * @author Daniel Wirtz <dcode@dcode.io>
 */

/**
 BEGIN_NODE_INCLUDE
 var child_process = require('child_process');
 END_NODE_INCLUDE
 */

/**
 * @constructor
 */
function Node_child_process(){}

/** @type {function(new:Node_ChildProcess)} */
Node_child_process.prototype.ChildProcess;

/**
 * @constructor
 * @param {...*} var_args
 * @extends {Node_EventEmitter}
 */
function Node_ChildProcess(var_args) {}; // Private?

/**
 * @type {Node_ReadableStream}
 */
Node_ChildProcess.prototype.stdin;

/**
 * @type {Node_WritableStream}
 */
Node_ChildProcess.prototype.stdout;

/**
 * @type {Node_WritableStream}
 */
Node_ChildProcess.prototype.stderr;

/**
 * @type {number}
 */
Node_ChildProcess.prototype.pid;

/**
 * @param {string=} signal
 */
Node_ChildProcess.prototype.kill = function(signal) {};

/**
 * @param {Object.<string,*>} message
 * @param {*} sendHandle
 */
Node_ChildProcess.prototype.send = function(message, sendHandle) {};

/**
 */
Node_ChildProcess.prototype.disconnect = function() {};

/**
 * @typedef {{cwd: string, stdio: (Array|string), customFds: Array, env: Object.<string,*>, detached: boolean, uid: number, gid: number, encoding: string, timeout: number, maxBuffer: number, killSignal: string}}
 */
Node_child_process.Options;

/**
 * @param {string} command
 * @param {Array.<string>=} args
 * @param {Node_child_process.Options=} options
 * @return {Node_ChildProcess}
 */
Node_child_process.prototype.ChildProcess.spawn = function(command, args, options) {};

/**
 * @param {string} command
 * @param {Node_child_process.Options|function(Error, Node_Buffer, Node_Buffer)=} options
 * @param {function(Error, Node_Buffer, Node_Buffer)=} callback
 * @return {Node_ChildProcess}
 */
Node_child_process.prototype.exec = function(command, options, callback) {};

/**
 * @param {string} file
 * @param {Array.<string>} args
 * @param {Node_child_process.Options} options
 * @param {function(Error, Node_Buffer, Node_Buffer)} callback
 * @return {Node_ChildProcess}
 */
Node_child_process.prototype.execFile = function(file, args, options, callback) {};

/**
 * @param {string} modulePath
 * @param {Array.<string>=} args
 * @param {Node_child_process.Options=} options
 * @return {Node_ChildProcess}
 */
Node_child_process.prototype.fork = function(modulePath, args, options) {};
