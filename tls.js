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
 * @fileoverview Definitions for node's tls module. Depends on the stream module.
 * @see http://nodejs.org/api/tls.html
 * @see https://github.com/joyent/node/blob/master/lib/tls.js
 * @externs
 * @author Daniel Wirtz <dcode@dcode.io>
 */

/**
 BEGIN_NODE_INCLUDE
 var tls = require('tls');
 END_NODE_INCLUDE
 */

/**
 * @constructor
 */
function Node_tls(){};

/**
 * @typedef {{pfx: (string|Node_Buffer), key: (string|Node_Buffer), passphrase: string, cert: (string|Node_Buffer), ca: Array.<string|Node_Buffer>, crl: (string|Array.<string>), ciphers: string, honorCipherOrder: boolean, requestCert: boolean, rejectUnauthorized: boolean, NPNProtocols: (Array|Node_Buffer), SNICallback: function(string), sessionIdContext: string}}
 */
Node_tls.CreateOptions;

/**
 * 
 * @param {Node_tls.CreateOptions} options
 * @param {function(...)=} secureConnectionListener
 * @return {Node_tls_Server}
 */
Node_tls.prototype.createServer = function(options, secureConnectionListener) {};

/**
 * @typedef {{host: string, port: number, socket: *, pfx: (string|Node_Buffer), key: (string|Node_Buffer), passphrase: string, cert: (string|Node_Buffer), ca: Array.<string>, rejectUnauthorized: boolean, NPNProtocols: Array.<string|Node_Buffer>, servername: string}}
 */
Node_tls.ConnectOptions;

/**
 * 
 * @param {number|Node_tls.ConnectOptions} port
 * @param {(string|Node_tls.ConnectOptions|function(...))=} host
 * @param {(Node_tls.ConnectOptions|function(...))=} options
 * @param {function(...)=} callback
 */
Node_tls.prototype.connect = function(port, host, options, callback) {};

/**
 * @param {Node_crypto.Credentials=} credentials
 * @param {boolean=} isServer
 * @param {boolean=} requestCert
 * @param {boolean=} rejectUnauthorized
 * @return {Node_SecurePair}
 */
Node_tls.prototype.createSecurePair = function(credentials, isServer, requestCert, rejectUnauthorized) {};

/**
 * @constructor
 * @extends {Node_EventEmitter}
 */
function Node_SecurePair() {};

/** @type {function(new:Node_tls_Server)} */
Node_tls.prototype.Server;

/**
 * @constructor
 * @extends {Node_Server}
 */
function Node_tls_Server() {};

/**
 * @param {string} hostname
 * @param {string|Node_Buffer} credentials
 */
Node_tls_Server.prototype.addContext = function(hostname, credentials) {};

/**
 * @constructor
 * @extends {Node_Duplex}
 */
function Node_CleartextStream() {};

/**
 * @type {boolean}
 */
Node_CleartextStream.prototype.authorized;

/**
 * @type {?string}
 */
Node_CleartextStream.prototype.authorizationError;

/**
 * @return {Object.<string,(string|Object.<string,string>)>}
 */
Node_CleartextStream.prototype.getPeerCertificate = function() {};

/**
 * @return {{name: string, version: string}}
 */
Node_CleartextStream.prototype.getCipher = function() {};

/**
 * @return {{port: number, family: string, address: string}}
 */
Node_CleartextStream.prototype.address = function() {};

/**
 * @type {string}
 */
Node_CleartextStream.prototype.remoteAddress;

/**
 * @type {number}
 */
Node_CleartextStream.prototype.remotePort;
