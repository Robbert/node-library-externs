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
 * @fileoverview Definitions for node's dgram module. Depends on the events module.
 * @see http://nodejs.org/api/dgram.html
 * @see https://github.com/joyent/node/blob/master/lib/dgram.js
 * @externs
 * @author Daniel Wirtz <dcode@dcode.io>
 */

/**
 BEGIN_NODE_INCLUDE
 var dgram = require('dgram');
 END_NODE_INCLUDE
 */

/**
 * @constructor
 */
function Node_dgram(){};

/**
 * @param {string} type
 * @param {function(...)=} callback
 * @return {Node_dgram_Socket}
 */
Node_dgram.prototype.createSocket = function(type, callback) {};

/** @type {function(new:Node_dgram_Socket)} */
Node_dgram.prototype.Socket;

/**
 * @constructor
 * @extends {Node_EventEmitter}
 */
function Node_dgram_Socket() {};

/**
 * @param {Node_Buffer} buf
 * @param {number} offset
 * @param {number} length
 * @param {number} port
 * @param {string} address
 * @param {function(...)=} callback
 */
Node_dgram_Socket.prototype.send = function(buf, offset, length, port, address, callback) {};

/** 
 * @param {number} port
 * @param {string=} address
 */
Node_dgram_Socket.prototype.bind = function(port, address) {};

/**
 */
Node_dgram_Socket.prototype.close = function() {};

/**
 * @return {string}
 */
Node_dgram_Socket.prototype.address = function() {};

/**
 * @param {boolean} flag
 */
Node_dgram_Socket.prototype.setBroadcast = function(flag) {};

/**
 * @param {number} ttl
 * @return {number}
 */
Node_dgram_Socket.prototype.setTTL = function(ttl) {};

/**
 * @param {number} ttl
 * @return {number}
 */
Node_dgram_Socket.prototype.setMulticastTTL = function(ttl) {};

/**
 * @param {boolean} flag
 */
Node_dgram_Socket.prototype.setMulticastLoopback = function(flag) {};

/**
 * @param {string} multicastAddress
 * @param {string=} multicastInterface
 */
Node_dgram_Socket.prototype.addMembership = function(multicastAddress, multicastInterface) {};

/**
 * @param {string} multicastAddress
 * @param {string=} multicastInterface
 */
Node_dgram_Socket.prototype.dropMembership = function(multicastAddress, multicastInterface) {};
