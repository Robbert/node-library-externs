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
 * @fileoverview Definitions for node's zlib module. Depends on the events and buffer modules.
 * @see http://nodejs.org/api/zlib.html
 * @see https://github.com/joyent/node/blob/master/lib/zlib.js
 * @externs
 * @author Daniel Wirtz <dcode@dcode.io>
 */

/**
 BEGIN_NODE_INCLUDE
 var zlib = require('zlib');
 END_NODE_INCLUDE
 */

/**
 * @interface
 */
function Node_zlib() {}

/**
 * @typedef {{chunkSize: ?number, windowBits: ?number, level: ?number, memLevel: ?number, strategy: ?number, dictionary: ?Object}}
 */
Node_zlib.Options;



/**
 * @constructor
 * @extends {stream.Transform}
 */
Node_zlib.prototype.Zlib = function Node_zlib_Zlib() {};

/**
 * @param {Node_zlib.Options} options
 * @constructor
 * @extends {Node_zlib_Zlib}
 */
Node_zlib.prototype.Gzip = function Node_zlib_Gzip(options) {};

/**
 * @param {Node_zlib.Options} options
 * @constructor
 * @extends {Node_zlib_Zlib}
 */
Node_zlib.prototype.Gunzip = function Node_zlib_Gunzip(options) {};

/**
 * @param {Node_zlib.Options} options
 * @constructor
 * @extends {Node_zlib_Zlib}
 */
Node_zlib.prototype.Deflate = function Node_zlib_Deflate(options) {};

/**
 * @param {Node_zlib.Options} options
 * @constructor
 * @extends {Node_zlib_Zlib}
 */
Node_zlib.prototype.Inflate = function Node_zlib_Inflate(options) {};

/**
 * @param {Node_zlib.Options} options
 * @constructor
 * @extends {Node_zlib_Zlib}
 */
Node_zlib.prototype.DeflateRaw = function Node_zlib_DeflateRaw(options) {};

/**
 * @param {Node_zlib.Options} options
 * @constructor
 * @extends {Node_zlib_Zlib}
 */
Node_zlib.prototype.InflateRaw = function Node_zlib_InflateRaw(options) {};

/**
 * @param {Node_zlib.Options} options
 * @constructor
 * @extends {Node_zlib_Zlib}
 */
Node_zlib.prototype.Unzip = function Node_zlib_Unzip(options) {};



/**
 * @param {Node_zlib.Options} options
 * @return {zlib.Gzip}
 */
Node_zlib.prototype.createGzip = function(options) {};

/**
 * @param {Node_zlib.Options} options
 * @return {zlib.Gunzip}
 */
Node_zlib.prototype.createGunzip = function(options) {};

/**
 * @param {Node_zlib.Options} options
 * @return {zlib.Deflate}
 */
Node_zlib.prototype.createDeflate = function(options) {};
/**
 * @param {Node_zlib.Options} options
 * @return {zlib.Inflate}
 */
Node_zlib.prototype.createInflate = function(options) {};

/**
 * @param {Node_zlib.Options} options
 * @return {zlib.DeflateRaw}
 */
Node_zlib.prototype.createDeflateRaw = function(options) {};

/**
 * @param {Node_zlib.Options} options
 * @return {zlib.InflateRaw}
 */
Node_zlib.prototype.createInflateRaw = function(options) {};

/**
 * @param {Node_zlib.Options} options
 * @return {zlib.Unzip}
 */
Node_zlib.prototype.createUnzip = function(options) {};



/**
 * @param {string|buffer.Buffer} buf
 * @param {function(...)} callback
 */
Node_zlib.prototype.deflate = function(buf, callback) {};

/**
 * @param {string|buffer.Buffer} buf
 * @param {function(...)} callback
 */
Node_zlib.prototype.deflateRaw = function(buf, callback) {};

/**
 * @param {string|buffer.Buffer} buf
 * @param {function(...)} callback
 */
Node_zlib.prototype.gzip = function(buf, callback) {};

/**
 * @param {string|buffer.Buffer} buf
 * @param {function(...)} callback
 */
Node_zlib.prototype.gunzip = function(buf, callback) {};

/**
 * @param {string|buffer.Buffer} buf
 * @param {function(...)} callback
 */
Node_zlib.prototype.inflate = function(buf, callback) {};

/**
 * @param {string|buffer.Buffer} buf
 * @param {function(...)} callback
 */
Node_zlib.prototype.inflateRaw = function(buf, callback) {};

/**
 * @param {string|buffer.Buffer} buf
 * @param {function(...)} callback
 */
Node_zlib.prototype.unzip = function(buf, callback) {};



/** @const {number} */
Node_zlib.prototype.Z_NO_FLUSH = 0;

/** @const {number} */
Node_zlib.prototype.Z_PARTIAL_FLUSH = 1;

/** @const {number} */
Node_zlib.prototype.Z_SYNC_FLUSH = 2;

/** @const {number} */
Node_zlib.prototype.Z_FULL_FLUSH = 3;

/** @const {number} */
Node_zlib.prototype.Z_FINISH = 4;

/** @const {number} */
Node_zlib.prototype.Z_BLOCK = 5;

/** @const {number} */
Node_zlib.prototype.Z_TREES = 6;



/** @const {number} */
Node_zlib.prototype.Z_OK = 0;

/** @const {number} */
Node_zlib.prototype.Z_STREAM_END = 1;

/** @const {number} */
Node_zlib.prototype.Z_NEED_DICT = 2;

/** @const {number} */
Node_zlib.prototype.Z_ERRNO = -1;

/** @const {number} */
Node_zlib.prototype.Z_STREAM_ERROR = -2;

/** @const {number} */
Node_zlib.prototype.Z_DATA_ERROR = -3;

/** @const {number} */
Node_zlib.prototype.Z_MEM_ERROR = -4;

/** @const {number} */
Node_zlib.prototype.Z_BUF_ERROR = -5;

/** @const {number} */
Node_zlib.prototype.Z_VERSION_ERROR = -6;



/** @const {number} */
Node_zlib.prototype.Z_NO_COMPRESSION = 0;

/** @const {number} */
Node_zlib.prototype.Z_BEST_SPEED = 1;

/** @const {number} */
Node_zlib.prototype.Z_BEST_COMPRESSION = 9;

/** @const {number} */
Node_zlib.prototype.Z_DEFAULT_COMPRESSION = -1;



/** @const {number} */
Node_zlib.prototype.Z_FILTERED = 1;

/** @const {number} */
Node_zlib.prototype.Z_HUFFMAN_ONLY = 2;

/** @const {number} */
Node_zlib.prototype.Z_RLE = 3;

/** @const {number} */
Node_zlib.prototype.Z_FIXED = 4;

/** @const {number} */
Node_zlib.prototype.Z_DEFAULT_STRATEGY = 0;



/** @const {number} */
Node_zlib.prototype.Z_BINARY = 0;

/** @const {number} */
Node_zlib.prototype.Z_TEXT = 1;

/** @const {number} */
Node_zlib.prototype.Z_ASCII = 1;

/** @const {number} */
Node_zlib.prototype.Z_UNKNOWN = 2;



/** @const {number} */
Node_zlib.prototype.Z_DEFLATED = 8;



/** @const {number} */
Node_zlib.prototype.Z_NULL = 0;
