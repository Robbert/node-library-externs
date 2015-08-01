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
 * @fileoverview Definitions for node's global process object. Depends on the stream module.
 * @see http://nodejs.org/api/process.html
 * @externs
 * @author Daniel Wirtz <dcode@dcode.io>
 */

/** @type {Node_process} */
var process;

/**
 * @constructor
 * @extends {Node_EventEmitter}
 */
function Node_process()
{

}

/**
 * @type {Node_ReadableStream}
 */
Node_process.prototype.stdin;

/**
 * @type {Node_WritableStream}
 */
Node_process.prototype.stdout;

/**
 * @type {Node_WritableStream}
 */
Node_process.prototype.stderr;

/**
 * @type {Array.<string>}
 */
Node_process.prototype.argv;

/**
 * @type {string}
 */
Node_process.prototype.execPath;

/**
 */
Node_process.prototype.abort = function() {};

/**
 * @param {string} directory
 */
Node_process.prototype.chdir = function(directory) {};

/**
 * @return {string}
 * @nosideeffects
 */
Node_process.prototype.cwd = function() {};

/**
 * @type {Object.<string,string>}
 */
Node_process.prototype.env;

/**
 * @param {number=} code
 */
Node_process.prototype.exit = function(code) {};

/**
 * @return {number}
 * @nosideeffects
 */
Node_process.prototype.getgid = function() {};

/**
 * @param {number} id
 */
Node_process.prototype.setgid = function(id) {};

/**
 * @return {number}
 * @nosideeffects
 */
Node_process.prototype.getuid = function() {};

/**
 * @param {number} id
 */
Node_process.prototype.setuid = function(id) {};

/**
 * @type {!string}
 */
Node_process.prototype.version;

/**
 * @type {Object.<string,string>}
 */
Node_process.prototype.versions;

/**
 * @type {Object.<string,*>}
 */
Node_process.prototype.config;

/**
 * @param {number} pid
 * @param {string=} signal
 */
Node_process.prototype.kill = function(pid, signal) {};

/**
 * @type {number}
 */
Node_process.prototype.pid;

/**
 * @type {string}
 */
Node_process.prototype.title;

/**
 * @type {string}
 */
Node_process.prototype.arch;

/**
 * @type {string}
 */
Node_process.prototype.platform;

/**
 * @return {Object.<string,number>}
 * @nosideeffects
 */
Node_process.prototype.memoryUsage = function() {};

/**
 * @param {!function()} callback
 */
Node_process.prototype.nextTick = function(callback) {};

/**
 * @param {number=} mask
 */
Node_process.prototype.umask = function(mask) {};

/**
 * @return {number}
 * @nosideeffects
 */
Node_process.prototype.uptime = function() {};

/**
 * @return {number}
 * @nosideeffects
 */
Node_process.prototype.hrtime = function() {};
