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
 * @interface
 */
function Node_stream()
{
    //
}

/**
 * @interface
 * @param {Object=} options
 * @extends {Node_events.EventEmitter}
 */
Node_stream.Stream = function(options) {};

/**
 * @param {Node_stream.Writable} dest
 * @param {{end: boolean}=} pipeOpts
 * @return {Node_stream.Writable}
 */
Node_stream.Stream.prototype.pipe = function(dest, pipeOpts) {};

/**
 * @interface
 * @extends Node_stream.Readable
 */
Node_stream.ReadableStream = function() {};

/**
 * @type {boolean}
 */
Node_stream.ReadableStream.prototype.readable;

/**
 * @param {string=} encoding
 */
Node_stream.ReadableStream.prototype.setEncoding = function(encoding) {};

/**
 */
Node_stream.ReadableStream.prototype.destroy = function() {};

/**
 * @interface
 * @extends Node_stream.Writable
 */
Node_stream.WritableStream = function() {};

/**
 */
Node_stream.WritableStream.prototype.drain = function() {};

/**
 * @type {boolean}
 */
Node_stream.WritableStream.prototype.writable;

/**
 * @param {string|Node_buffer.Buffer} buffer
 * @param {string=} encoding
 */
Node_stream.WritableStream.prototype.write = function(buffer, encoding) {};

/**
 * @param {string|Node_buffer.Buffer=} buffer
 * @param {string=} encoding
 * @param {function(*=)=} cb
 */
Node_stream.WritableStream.prototype.end = function(buffer, encoding, cb) {};

/**
 */
Node_stream.WritableStream.prototype.destroy = function() {};

/**
 */
Node_stream.WritableStream.prototype.destroySoon = function() {};

// Undocumented

/**
 * @interface
 * @param {Object=} options
 * @extends Node_stream.Stream
 */
Node_stream.Readable = function(options) {};

/**
 * @type {boolean}
 * @deprecated
 */
Node_stream.Readable.prototype.readable;

/**
 * @protected
 * @param {string|Node_buffer.Buffer|null} chunk
 * @return {boolean}
 */
Node_stream.Readable.prototype.push = function(chunk) {};

/**
 * @param {string|Node_buffer.Buffer|null} chunk
 * @return {boolean}
 */
Node_stream.Readable.prototype.unshift = function(chunk) {};

/**
 * @param {string} enc
 */
Node_stream.Readable.prototype.setEncoding = function(enc) {};

/**
 * @param {number=} n
 * @return {Node_buffer.Buffer|string|null}
 */
Node_stream.Readable.prototype.read = function(n) {};

/**
 * @protected
 * @param {number} n
 */
Node_stream.Readable.prototype._read = function(n) {};

/**
 * @param {Node_stream.Writable=} dest
 * @return {Node_stream.Readable}
 */
Node_stream.Readable.prototype.unpipe = function(dest) {};

/**
 */
Node_stream.Readable.prototype.resume = function() {};

/**
 */
Node_stream.Readable.prototype.pause = function() {};

/**
 * @param {Node_stream.Stream} stream
 * @return {Node_stream.Readable}
 */
Node_stream.Readable.prototype.wrap = function(stream) {};

/**
 * @interface
 * @param {Object=} options
 * @extends Node_stream.Stream
 */
Node_stream.Writable = function(options) {};

/**
 * @deprecated
 * @type {boolean}
 */
Node_stream.Writable.prototype.writable;

/**
 * @param {string|Node_buffer.Buffer} chunk
 * @param {string=} encoding
 * @param {function(*=)=} cb
 * @return {boolean}
 */
Node_stream.Writable.prototype.write = function(chunk, encoding, cb) {};

/**
 * @protected
 * @param {string|Node_buffer.Buffer} chunk
 * @param {string} encoding
 * @param {function(*=)} cb
 */
Node_stream.Writable.prototype._write = function(chunk, encoding, cb) {};

/**
 * @param {string|Node_buffer.Buffer=} chunk
 * @param {string=} encoding
 * @param {function(*=)=} cb
 */
Node_stream.Writable.prototype.end = function(chunk, encoding, cb) {};

/**
 * @interface
 * @param {Object=} options
 * @extends Node_stream.Readable
 * Xextends Node_stream.Writable
 */
Node_stream.Duplex = function(options) {};

/**
 * @type {boolean}
 */
Node_stream.Duplex.prototype.allowHalfOpen;


/**
 * @param {Object=} options
 * @interface
 * @extends Node_stream.Duplex
 */
Node_stream.Transform = function(options) {};

/**
 * @protected
 * @param {string|Node_buffer.Buffer} chunk
 * @param {string} encoding
 * @param {function(*=)} cb
 */
Node_stream.Transform._transform = function(chunk, encoding, cb) {};

/**
 * @protected
 * @param {function(*=)} cb
 */
Node_stream.Transform._flush = function(cb) {};

/**
 * @param {Object=} options
 * @interface
 * @extends Node_stream.Transform
 */
Node_stream.PassThrough = function(options) {};
