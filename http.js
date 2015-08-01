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
 * @fileoverview Definitions for node's http module. Depends on the events module.
 * @see http://nodejs.org/api/http.html
 * @see https://github.com/joyent/node/blob/master/lib/http.js
 * @externs
 */

/**
BEGIN_NODE_INCLUDE
var http = require('http');
END_NODE_INCLUDE
 */

/**
 * @constructor
 */
function Node_http(){};

/**
 * @typedef {function(Node_http_IncomingMessage, Node_http_ServerResponse)}
 */
Node_http.RequestListener;

/**
 * @param {Node_http.RequestListener=} listener
 * @return {Node_http_Server}
 */
Node_http.prototype.createServer = function(listener) {};

/** @type {function(new:Node_http_Server)} */
Node_http.prototype.Server;

/**
 * @param {Node_http.RequestListener=} listener  
 * @constructor
 * @extends {Node_EventEmitter}
 */
function Node_http_Server(listener) {};

/**
 * @param {(number|string)} portOrPath
 * @param {(string|Function)=} hostnameOrCallback
 * @param {Function=} callback
 */
Node_http_Server.prototype.listen = function(portOrPath, hostnameOrCallback, callback) {};

/**
 */
Node_http_Server.prototype.close = function() {};


/** @type {function(new:Node_http_IncomingMessage)} */
Node_http.prototype.IncomingMessage;
/**
 * @constructor
 * @extends {Node_Readable}
 */
function Node_http_IncomingMessage() {};

/**
 * @type {?string}
 * */
Node_http_IncomingMessage.prototype.method;

/**
 * @type {?string}
 */
Node_http_IncomingMessage.prototype.url;

/**
 * @type {Object}
 * */
Node_http_IncomingMessage.prototype.headers;

/**
 * @type {Object}
 * */
Node_http_IncomingMessage.prototype.trailers;

/**
 * @type {string}
 */
Node_http_IncomingMessage.prototype.httpVersion;

/**
 * @type {string}
 */
Node_http_IncomingMessage.prototype.httpVersionMajor;

/**
 * @type {string}
 */
Node_http_IncomingMessage.prototype.httpVersionMinor;

/**
 * @type {*}
 */
Node_http_IncomingMessage.prototype.connection;

/**
 * @type {?number}
 */
Node_http_IncomingMessage.prototype.statusCode;

/**
 * @type {Node_Socket}
 */
Node_http_IncomingMessage.prototype.socket;

/**
 * @param {number} msecs
 * @param {function()} callback
 */
Node_http_IncomingMessage.prototype.setTimeout = function(msecs, callback) {};

/** @type {function(new:Node_http_ServerResponse)} */
Node_http.prototype.ServerResponse;

/**
 * @constructor
 * @extends {Node_EventEmitter}
 * @private
 */
function Node_http_ServerResponse() {};

/**
 */
Node_http_ServerResponse.prototype.writeContinue = function() {};

/**
 * @param {number} statusCode
 * @param {*=} reasonPhrase
 * @param {*=} headers
 */
Node_http_ServerResponse.prototype.writeHead = function(statusCode, reasonPhrase, headers) {};

/**
 * @type {number}
 */
Node_http_ServerResponse.prototype.statusCode;

/**
 * @param {string} name
 * @param {string} value
 */
Node_http_ServerResponse.prototype.setHeader = function(name, value) {};

/**
 * @param {string} name
 * @return {string|undefined} value
 */
Node_http_ServerResponse.prototype.getHeader = function(name) {};

/**
 * @param {string} name
 */
Node_http_ServerResponse.prototype.removeHeader = function(name) {};

/**
 * @param {string|Array|Node_Buffer} chunk
 * @param {string=} encoding
 */
Node_http_ServerResponse.prototype.write = function(chunk, encoding) {};

/**
 * @param {Object} headers
 */
Node_http_ServerResponse.prototype.addTrailers = function(headers) {};

/**
 * @param {(string|Array|Node_Buffer)=} data
 * @param {string=} encoding
 */
Node_http_ServerResponse.prototype.end = function(data, encoding) {};

/** @type {function(new:Node_http_ClientRequest)} */
Node_http.prototype.ClientRequest;

/**
 * @constructor
 * @extends {Node_EventEmitter}
 * @private
 */
function Node_http_ClientRequest() {};

/**
 * @param {string|Array|Node_Buffer} chunk
 * @param {string=} encoding
 */
Node_http_ClientRequest.prototype.write = function(chunk, encoding) {};

/**
 * @param {(string|Array|Node_Buffer)=} data
 * @param {string=} encoding
 */
Node_http_ClientRequest.prototype.end = function(data, encoding) {};

/**
 */
Node_http_ClientRequest.prototype.abort = function() {};

/**
 * @param {Object} options
 * @param {function(Node_http_IncomingMessage)} callback
 * @return {Node_http_ClientRequest}
 */
Node_http.prototype.request = function(options, callback) {};

/**
 * @param {Object} options
 * @param {function(Node_http_IncomingMessage)} callback
 * @return {Node_http_ClientRequest}
 */
Node_http.prototype.get = function(options, callback) {};

/** @type {function(new:Node_http_Agent)} */
Node_http.prototype.Agent;

/**
 * @constructor
 * @extends {Node_EventEmitter}
 */
function Node_http_Agent() {};

/**
 * @type {number}
 */
Node_http_Agent.prototype.maxSockets;

/**
 * @type {number}
 */
Node_http_Agent.prototype.sockets;

/**
 * @type {Array.<Node_http_ClientRequest>}
 */
Node_http_Agent.prototype.requests;

/**
 * @type {Node_http_Agent}
 */
Node_http.prototype.globalAgent;
