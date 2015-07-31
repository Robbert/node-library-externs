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
 * @fileoverview Definitions for node's cluster module. Depends on the events module.
 * @see http://nodejs.org/api/cluster.html
 * @see https://github.com/joyent/node/blob/master/lib/cluster.js
 * @externs
 * @author Daniel Wirtz <dcode@dcode.io>
 */

/**
 BEGIN_NODE_INCLUDE
 var cluster = require('cluster');
 END_NODE_INCLUDE
 */

/**
 * @interface
 * @extends {events.EventEmitter}
 */
function Node_cluster()
{

}

/**
 * @typedef {{exec: string, args: Array.<string>, silent: boolean}}
 */
Node_cluster.prototype.Settings;

/**
 * @type {cluster.Settings}
 */
Node_cluster.prototype.settings;

/**
 * @type {boolean}
 */
Node_cluster.prototype.isMaster;

/**
 * @type {boolean}
 */
Node_cluster.prototype.isWorker;

/**
 * @param {cluster.Settings=} settings
 */
Node_cluster.prototype.setupMaster = function(settings) {};

/**
 * @param {Object.<string,*>} env
 * @return {cluster.Worker}
 */
Node_cluster.prototype.fork = function(env) {};

/**
 * @param {function()=} callback
 */
Node_cluster.prototype.disconnect = function(callback) {};

/**
 * @type {?cluster.Worker}
 */
Node_cluster.prototype.worker;

/**
 * @type {?Object.<string,cluster.Worker>}
 */
Node_cluster.prototype.workers;

/**
 * @constructor
 * @extends events.EventEmitter
 */
Node_cluster.prototype.Worker = function() {};

/**
 * @type {string}
 */
Node_cluster.prototype.Worker.prototype.id;

/**
 * @type {child_process.ChildProcess}
 */
Node_cluster.prototype.Worker.prototype.process;

/**
 * @type {boolean}
 */
Node_cluster.prototype.Worker.prototype.suicide;

/**
 * @param {Object} message
 * @param {*=} sendHandle
 */
Node_cluster.prototype.Worker.prototype.send = function(message, sendHandle) {};

/**
 */
Node_cluster.prototype.Worker.prototype.destroy = function() {};

/**
 */
Node_cluster.prototype.Worker.prototype.disconnect = function() {};
