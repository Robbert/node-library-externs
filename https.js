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
 * @fileoverview Definitions for node's https module. Depends on the tls module.
 * @see http://nodejs.org/api/https.html
 * @see https://github.com/joyent/node/blob/master/lib/https.js
 * @externs
 */

/**
BEGIN_NODE_INCLUDE
var https = require('https');
END_NODE_INCLUDE
 */

/**
 * @constructor
 */
function Node_https(){};

/**
 * @constructor
 * @extends {Node_tls_Server}
 */
Node_https.prototype.Server = function() {};

/**
 * @param {...*} var_args
 */
Node_https.prototype.Server.prototype.listen = function(var_args) {};

/**
 * @param {function()=} callback
 */
Node_https.prototype.Server.prototype.close = function(callback) {};

/**
 * @param {Node_tls.CreateOptions} options
 * @param {function(Node_http_IncomingMessage, Node_http_ServerResponse)=} requestListener
 */
Node_https.prototype.createServer = function(options, requestListener) {};

/**
 * @typedef {{host: ?string, hostname: ?string, port: ?number, method: ?string, path: ?string, headers: ?Object.<string,string>, auth: ?string, agent: ?(Node_https_Agent|boolean), pfx: ?(string|Node_Buffer), key: ?(string|Node_Buffer), passphrase: ?string, cert: ?(string|Node_Buffer), ca: ?Array.<string>, ciphers: ?string, rejectUnauthorized: ?boolean}}
 */
Node_https.ConnectOptions;

/**
 * @param {Node_https.ConnectOptions|string} options
 * @param {function(Node_http_IncomingMessage)} callback
 * @return {Node_http_ClientRequest}
 */
Node_https.prototype.request = function(options, callback) {};

/**
 * @param {Node_https.ConnectOptions|string} options
 * @param {function(Node_http_IncomingMessage)} callback
 * @return {Node_http_ClientRequest}
 */
Node_https.prototype.get = function(options, callback) {};

/** @type {function(new:Node_https_Agent)} */
Node_https.prototype.Agent;

/**
 * @constructor
 * @extends {Node_http_Agent}
 */
function Node_https_Agent() {};

/**
 * @type {Node_https_Agent}
 */
Node_https.prototype.globalAgent;
