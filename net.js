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
 * @fileoverview Definitions for node's net module. Depends on the events and buffer modules.
 * @see http://nodejs.org/api/net.html
 * @see https://github.com/joyent/node/blob/master/lib/net.js
 * @externs
 * @author Daniel Wirtz <dcode@dcode.io>
 */

/**
 BEGIN_NODE_INCLUDE
 var net = require('net');
 END_NODE_INCLUDE
 */

/**
 * @constructor
 */
function Node_net(){};

/**
 * @typedef {{allowHalfOpen: ?boolean}}
 */
Node_net.CreateOptions;

/**
 * @param {(Node_net.CreateOptions|function(...))=} options
 * @param {function(...)=} connectionListener
 * @return {Node_Server}
 */
Node_net.prototype.createServer = function(options, connectionListener) {};

/**
 * @typedef {{port: ?number, host: ?string, localAddress: ?string, path: ?string, allowHalfOpen: ?boolean}}
 */
Node_net.ConnectOptions;

/**
 * @param {Node_net.ConnectOptions|number|string} arg1
 * @param {(function(...)|string)=} arg2
 * @param {function(...)=} arg3
 */
Node_net.prototype.connect = function(arg1, arg2, arg3) {};

/**
 * @param {Node_net.ConnectOptions|number|string} arg1
 * @param {(function(...)|string)=} arg2
 * @param {function(...)=} arg3
 */
Node_net.prototype.createConnection = function(arg1, arg2, arg3) {};

/** @type {function(new:Node_Server)} */
Node_net.prototype.Server;

/** @type {function(new:Node_Socket, Node_Socket.Options=)} */
Node_net.prototype.Socket;

/**
 * @constructor
 * @extends {Node_EventEmitter}
 */
function Node_Server() {};

/**
 * 
 * @param {number|*} port
 * @param {(string|number|function(...))=} host
 * @param {(number|function(...))=} backlog
 * @param {function(...)=} callback
 */
Node_Server.prototype.listen = function(port, host, backlog, callback) {};

/**
 * @param {function(...)=} callback
 */
Node_Server.prototype.close = function(callback) {};

/**
 * @return {{port: number, family: string, address: string}}
 */
Node_Server.prototype.address = function() {};

/**
 * @type {number}
 */
Node_Server.prototype.maxConnectinos;

/**
 * @type {number}
 */
Node_Server.prototype.connections;


/**
 * @constructor
 * @param {Node_Socket.Options=} options
 * @extends {Node_EventEmitter}
 */
function Node_Socket(options) {};

/** @typedef {{fd: ?*, type: ?string, allowHalfOpen: ?boolean}} */
Node_Socket.Options;

/**
 * @param {number|string|function(...)} port
 * @param {(string|function(...))=} host
 * @param {function(...)=} connectListener
 */
Node_Socket.prototype.connect = function(port, host, connectListener) {};

/**
 * @type {number}
 */
Node_Socket.prototype.bufferSize;

/**
 * @param {?string=} encoding
 */
Node_Socket.prototype.setEncoding = function(encoding) {};

/**
 * @param {string|Node_Buffer} data
 * @param {(string|function(...))=}encoding
 * @param {function(...)=} callback
 */
Node_Socket.prototype.write = function(data, encoding, callback) {};

/**
 * @param {(string|Node_Buffer)=}data
 * @param {string=} encoding
 */
Node_Socket.prototype.end = function(data, encoding) {};

/**
 */
Node_Socket.prototype.destroy = function() {};

/**
 */
Node_Socket.prototype.pause = function() {};

/**
 */
Node_Socket.prototype.resume = function() {};

/**
 * @param {number} timeout
 * @param {function(...)=} callback
 */
Node_Socket.prototype.setTimeout = function(timeout, callback) {};

/**
 * @param {boolean=} noDelay
 */
Node_Socket.prototype.setNoDelay = function(noDelay) {};

/**
 * @param {(boolean|number)=} enable
 * @param {number=} initialDelay
 */
Node_Socket.prototype.setKeepAlive = function(enable, initialDelay) {};

/**
 * @return {string}
 */
Node_Socket.prototype.address = function() {};

/**
 * @type {?string}
 */
Node_Socket.prototype.remoteAddress;

/**
 * @type {?number}
 */
Node_Socket.prototype.remotePort;

/**
 * @type {number}
 */
Node_Socket.prototype.bytesRead;

/**
 * @type {number}
 */
Node_Socket.prototype.bytesWritten;

/**
 * @param {*} input
 * @return {number}
 */
Node_net.prototype.isIP = function(input) {};

/**
 * @param {*} input
 * @return {boolean}
 */
Node_net.prototype.isIPv4 = function(input) {};

/**
 * @param {*} input
 * @return {boolean}
 */
Node_net.prototype.isIPv6 = function(input) {};
