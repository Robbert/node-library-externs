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
 * @fileoverview Definitions for node's os module.
 * @see http://nodejs.org/api/os.html
 * @externs
 * @author Daniel Wirtz <dcode@dcode.io>
 */

/**
 BEGIN_NODE_INCLUDE
 var os = require('os');
 END_NODE_INCLUDE
 */

/**
 * @constructor
 */
function Node_os()
{

}

/**
 * @return {string}
 * @nosideeffects
 */
Node_os.prototype.tmdDir = function() {};

/**
 * @return {string}
 * @nosideeffects
 */
Node_os.prototype.hostname = function() {};

/**
 * @return {string}
 * @nosideeffects
 */
Node_os.prototype.type = function() {};

/**
 * @return {string}
 * @nosideeffects
 */
Node_os.prototype.platform = function() {};

/**
 * @return {string}
 * @nosideeffects
 */
Node_os.prototype.arch = function() {};

/**
 * @return {string}
 * @nosideeffects
 */
Node_os.prototype.release = function() {};

/**
 * @return {number}
 * @nosideeffects
 */
Node_os.prototype.uptime = function() {};

/**
 * @return {Array.<number>}
 * @nosideeffects
 */
Node_os.prototype.loadavg = function() {};

/**
 * @return {number}
 * @nosideeffects
 */
Node_os.prototype.totalmem = function() {};

/**
 * @return {number}
 * @nosideeffects
 */
Node_os.prototype.freemem = function() {};

/**
 * @typedef {{model: string, speed: number, times: {user: number, nice: number, sys: number, idle: number, irg: number}}}
 */
var osCpusInfo;

/**
 * @return {Array.<osCpusInfo>}
 * @nosideeffects
 */
Node_os.prototype.cpus = function() {};

/**
 * @typedef {{address: string, family: string, internal: boolean}}
 */
var osNetworkInterfacesInfo;

/**
 * @return {Object.<string,osNetworkInterfacesInfo>}
 * @nosideeffects
 */
Node_os.prototype.networkInterfaces = function() {};

/**
 * @type {string}
 */
Node_os.prototype.EOL;
