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
 * @fileoverview Definitions for node's stream module. Depends on the events and buffer modules.
 * @see http://nodejs.org/api/stream.html
 * @see https://github.com/joyent/node/blob/master/lib/stream.js
 * @externs
 * @author Daniel Wirtz <dcode@dcode.io>
 */

/**
 BEGIN_NODE_INCLUDE
 var stream = require('stream');
 END_NODE_INCLUDE
 */

/**
 * @constructor
 */
function Node_stream()
{
    //
}

/** @type {function(new:Node_Stream, Object=)} */
Node_stream.Stream;

/**
 * @constructor
 * @param {Object=} options
 * @extends {Node_EventEmitter}
 */
function Node_Stream(options) {};

/**
 * @param {Node_Writable} dest
 * @param {{end: boolean}=} pipeOpts
 * @return {Node_Writable}
 */
Node_stream.Stream.prototype.pipe = function(dest, pipeOpts) {};

/** @type {function (new:Node_ReadableStream)} */
Node_stream.ReadableStream;

/**
 * @constructor
 * @extends {Node_Readable}
 */
function Node_ReadableStream() {};

/**
 * @type {boolean}
 */
Node_ReadableStream.prototype.readable;

/**
 * @param {string=} encoding
 */
Node_ReadableStream.prototype.setEncoding = function(encoding) {};

/**
 */
Node_ReadableStream.prototype.destroy = function() {};

/** @type {function(new:Node_WritableStream)} */
Node_stream.WritableStream;

/**
 * @constructor
 * @extends {Node_Writable}
 */
function Node_WritableStream() {};

/**
 */
Node_WritableStream.prototype.drain = function() {};

/**
 * @type {boolean}
 */
Node_WritableStream.prototype.writable;

/**
 * @param {string|Node_Buffer} buffer
 * @param {string=} encoding
 */
Node_WritableStream.prototype.write = function(buffer, encoding) {};

/**
 * @param {string|Node_Buffer=} buffer
 * @param {string=} encoding
 * @param {function(*=)=} cb
 */
Node_WritableStream.prototype.end = function(buffer, encoding, cb) {};

/**
 */
Node_WritableStream.prototype.destroy = function() {};

/**
 */
Node_WritableStream.prototype.destroySoon = function() {};

// Undocumented

/** @type {function(new:Node_Readable, Object=)} */
Node_stream.Readable;

/**
 * @constructor
 * @param {Object=} options
 * @extends {Node_Stream}
 */
function Node_Readable(options) {};

/**
 * @type {boolean}
 * @deprecated
 */
Node_Readable.prototype.readable;

/**
 * @protected
 * @param {string|Node_Buffer|null} chunk
 * @return {boolean}
 */
Node_Readable.prototype.push = function(chunk) {};

/**
 * @param {string|Node_Buffer|null} chunk
 * @return {boolean}
 */
Node_Readable.prototype.unshift = function(chunk) {};

/**
 * @param {string} enc
 */
Node_Readable.prototype.setEncoding = function(enc) {};

/**
 * @param {number=} n
 * @return {Node_Buffer|string|null}
 */
Node_Readable.prototype.read = function(n) {};

/**
 * @protected
 * @param {number} n
 */
Node_Readable.prototype._read = function(n) {};

/**
 * @param {Node_Writable=} dest
 * @return {Node_Readable}
 */
Node_Readable.prototype.unpipe = function(dest) {};

/**
 */
Node_Readable.prototype.resume = function() {};

/**
 */
Node_Readable.prototype.pause = function() {};

/**
 * @param {Node_Stream} stream
 * @return {Node_Readable}
 */
Node_Readable.prototype.wrap = function(stream) {};

/** @type {function(new:Node_Writable, Object=)} */
Node_stream.Writable;

/**
 * @constructor
 * @param {Object=} options
 * @extends {Node_Stream}
 */
function Node_Writable(options) {};

/**
 * @deprecated
 * @type {boolean}
 */
Node_Writable.prototype.writable;

/**
 * @param {string|Node_Buffer} chunk
 * @param {string=} encoding
 * @param {function(*=)=} cb
 * @return {boolean}
 */
Node_Writable.prototype.write = function(chunk, encoding, cb) {};

/**
 * @protected
 * @param {string|Node_Buffer} chunk
 * @param {string} encoding
 * @param {function(*=)} cb
 */
Node_Writable.prototype._write = function(chunk, encoding, cb) {};

/**
 * @param {string|Node_Buffer=} chunk
 * @param {string=} encoding
 * @param {function(*=)=} cb
 */
Node_Writable.prototype.end = function(chunk, encoding, cb) {};

/** @type {function(new:Node_Duplex, Object=)} */
Node_stream.Duplex;

/**
 * @constructor
 * @param {Object=} options
 * @extends {Node_Readable}
 * Xextends {Node_Writable}
 */
function Node_Duplex(options) {};

/**
 * @type {boolean}
 */
Node_Duplex.prototype.allowHalfOpen;

/** @type {function(new:Node_Transform, Object=)} */
Node_stream.Transform;

/**
 * @param {Object=} options
 * @constructor
 * @extends {Node_Duplex}
 */
function Node_Transform(options) {};

/**
 * @protected
 * @param {string|Node_Buffer} chunk
 * @param {string} encoding
 * @param {function(*=)} cb
 */
Node_Transform._transform = function(chunk, encoding, cb) {};

/**
 * @protected
 * @param {function(*=)} cb
 */
Node_Transform._flush = function(cb) {};

/** @type {function(new:Node_PassThrough, Object=)} */
Node_stream.PassThrough;

/**
 * @param {Object=} options
 * @constructor
 * @extends {Node_Transform}
 */
function Node_PassThrough(options) {};
