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
 * @interface
 * @extends {Node_events.EventEmitter}
 */
function Node_process()
{

}

/**
 * @type {Node_stream.ReadableStream}
 */
Node_process.stdin;

/**
 * @type {Node_stream.WritableStream}
 */
Node_process.stdout;

/**
 * @type {Node_stream.WritableStream}
 */
Node_process.stderr;

/**
 * @type {Array.<string>}
 */
Node_process.argv;

/**
 * @type {string}
 */
Node_process.execPath;

/**
 */
Node_process.abort = function() {};

/**
 * @param {string} directory
 */
Node_process.chdir = function(directory) {};

/**
 * @return {string}
 * @nosideeffects
 */
Node_process.cwd = function() {};

/**
 * @type {Object.<string,string>}
 */
Node_process.env;

/**
 * @param {number=} code
 */
Node_process.exit = function(code) {};

/**
 * @return {number}
 * @nosideeffects
 */
Node_process.getgid = function() {};

/**
 * @param {number} id
 */
Node_process.setgid = function(id) {};

/**
 * @return {number}
 * @nosideeffects
 */
Node_process.getuid = function() {};

/**
 * @param {number} id
 */
Node_process.setuid = function(id) {};

/**
 * @type {!string}
 */
Node_process.version;

/**
 * @type {Object.<string,string>}
 */
Node_process.versions;

/**
 * @type {Object.<string,*>}
 */
Node_process.config;

/**
 * @param {number} pid
 * @param {string=} signal
 */
Node_process.kill = function(pid, signal) {};

/**
 * @type {number}
 */
Node_process.pid;

/**
 * @type {string}
 */
Node_process.title;

/**
 * @type {string}
 */
Node_process.arch;

/**
 * @type {string}
 */
Node_process.platform;

/**
 * @return {Object.<string,number>}
 * @nosideeffects
 */
Node_process.memoryUsage = function() {};

/**
 * @param {!function()} callback
 */
Node_process.nextTick = function(callback) {};

/**
 * @param {number=} mask
 */
Node_process.umask = function(mask) {};

/**
 * @return {number}
 * @nosideeffects
 */
Node_process.uptime = function() {};

/**
 * @return {number}
 * @nosideeffects
 */
Node_process.hrtime = function() {};
