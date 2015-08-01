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
 * @constructor
 */
function Node_zlib() {}

/**
 * @typedef {{chunkSize: ?number, windowBits: ?number, level: ?number, memLevel: ?number, strategy: ?number, dictionary: ?Object}}
 */
Node_zlib.Options;



/**
 * @constructor
 * @extends {Node_Transform}
 */
function Node_Zlib() {};

/**
 * @constructor
 * @extends {Node_Zlib}
 * @param {Node_zlib.Options} options
 */
function Node_Gzip(options) {};

/**
 * @constructor
 * @extends {Node_Zlib}
 * @param {Node_zlib.Options} options
 */
function Node_Gunzip(options) {};

/**
 * @constructor
 * @extends {Node_Zlib}
 * @param {Node_zlib.Options} options
 */
function Node_Deflate(options) {};

/**
 * @constructor
 * @extends {Node_Zlib}
 * @param {Node_zlib.Options} options
 */
function Node_Inflate(options) {};

/**
 * @constructor
 * @extends {Node_Zlib}
 * @param {Node_zlib.Options} options
 */
function Node_DeflateRaw(options) {};

/**
 * @constructor
 * @extends {Node_Zlib}
 * @param {Node_zlib.Options} options
 */
function Node_InflateRaw(options) {};

/**
 * @constructor
 * @extends {Node_Zlib}
 * @param {Node_zlib.Options} options
 */
function Node_Unzip(options) {};


/** @type {function(new:Node_Gzip,Node_zlib.Options)} */
Node_zlib.prototype.Gzip;

/** @type {function(new:Node_Gunzip,Node_zlib.Options)} */
Node_zlib.prototype.Gunzip;

/** @type {function(new:Node_Deflate,Node_zlib.Options)} */
Node_zlib.prototype.Deflate;

/** @type {function(new:Node_Inflate,Node_zlib.Options)} */
Node_zlib.prototype.Inflate;

/** @type {function(new:Node_DeflateRaw,Node_zlib.Options)} */
Node_zlib.prototype.DeflateRaw;

/** @type {function(new:Node_InflateRaw,Node_zlib.Options)} */
Node_zlib.prototype.InflateRaw;

/** @type {function(new:Node_Unzip,Node_zlib.Options)} */
Node_zlib.prototype.Unzip;

/**
 * @param {Node_zlib.Options} options
 * @return {Node_Gzip}
 */
Node_zlib.prototype.createGzip = function(options) {};

/**
 * @param {Node_zlib.Options} options
 * @return {Node_Gunzip}
 */
Node_zlib.prototype.createGunzip = function(options) {};

/**
 * @param {Node_zlib.Options} options
 * @return {Node_Deflate}
 */
Node_zlib.prototype.createDeflate = function(options) {};
/**
 * @param {Node_zlib.Options} options
 * @return {Node_Inflate}
 */
Node_zlib.prototype.createInflate = function(options) {};

/**
 * @param {Node_zlib.Options} options
 * @return {Node_DeflateRaw}
 */
Node_zlib.prototype.createDeflateRaw = function(options) {};

/**
 * @param {Node_zlib.Options} options
 * @return {Node_InflateRaw}
 */
Node_zlib.prototype.createInflateRaw = function(options) {};

/**
 * @param {Node_zlib.Options} options
 * @return {Node_Unzip}
 */
Node_zlib.prototype.createUnzip = function(options) {};



/**
 * @param {string|Node_Buffer} buf
 * @param {function(...)} callback
 */
Node_zlib.prototype.deflate = function(buf, callback) {};

/**
 * @param {string|Node_Buffer} buf
 * @param {function(...)} callback
 */
Node_zlib.prototype.deflateRaw = function(buf, callback) {};

/**
 * @param {string|Node_Buffer} buf
 * @param {function(...)} callback
 */
Node_zlib.prototype.gzip = function(buf, callback) {};

/**
 * @param {string|Node_Buffer} buf
 * @param {function(...)} callback
 */
Node_zlib.prototype.gunzip = function(buf, callback) {};

/**
 * @param {string|Node_Buffer} buf
 * @param {function(...)} callback
 */
Node_zlib.prototype.inflate = function(buf, callback) {};

/**
 * @param {string|Node_Buffer} buf
 * @param {function(...)} callback
 */
Node_zlib.prototype.inflateRaw = function(buf, callback) {};

/**
 * @param {string|Node_Buffer} buf
 * @param {function(...)} callback
 */
Node_zlib.prototype.unzip = function(buf, callback) {};



/**
 * @type {number}
 * @const
 */
Node_zlib.prototype.Z_NO_FLUSH = 0;

/**
 * @type {number}
 * @const
 */
Node_zlib.prototype.Z_PARTIAL_FLUSH = 1;

/**
 * @type {number}
 * @const
 */
Node_zlib.prototype.Z_SYNC_FLUSH = 2;

/**
 * @type {number}
 * @const
 */
Node_zlib.prototype.Z_FULL_FLUSH = 3;

/**
 * @type {number}
 * @const
 */
Node_zlib.prototype.Z_FINISH = 4;

/**
 * @type {number}
 * @const
 */
Node_zlib.prototype.Z_BLOCK = 5;

/**
 * @type {number}
 * @const
 */
Node_zlib.prototype.Z_TREES = 6;



/**
 * @type {number}
 * @const
 */
Node_zlib.prototype.Z_OK = 0;

/**
 * @type {number}
 * @const
 */
Node_zlib.prototype.Z_STREAM_END = 1;

/**
 * @type {number}
 * @const
 */
Node_zlib.prototype.Z_NEED_DICT = 2;

/**
 * @type {number}
 * @const
 */
Node_zlib.prototype.Z_ERRNO = -1;

/**
 * @type {number}
 * @const
 */
Node_zlib.prototype.Z_STREAM_ERROR = -2;

/**
 * @type {number}
 * @const
 */
Node_zlib.prototype.Z_DATA_ERROR = -3;

/**
 * @type {number}
 * @const
 */
Node_zlib.prototype.Z_MEM_ERROR = -4;

/**
 * @type {number}
 * @const
 */
Node_zlib.prototype.Z_BUF_ERROR = -5;

/**
 * @type {number}
 * @const
 */
Node_zlib.prototype.Z_VERSION_ERROR = -6;



/**
 * @type {number}
 * @const
 */
Node_zlib.prototype.Z_NO_COMPRESSION = 0;

/**
 * @type {number}
 * @const
 */
Node_zlib.prototype.Z_BEST_SPEED = 1;

/**
 * @type {number}
 * @const
 */
Node_zlib.prototype.Z_BEST_COMPRESSION = 9;

/**
 * @type {number}
 * @const
 */
Node_zlib.prototype.Z_DEFAULT_COMPRESSION = -1;



/**
 * @type {number}
 * @const
 */
Node_zlib.prototype.Z_FILTERED = 1;

/**
 * @type {number}
 * @const
 */
Node_zlib.prototype.Z_HUFFMAN_ONLY = 2;

/**
 * @type {number}
 * @const
 */
Node_zlib.prototype.Z_RLE = 3;

/**
 * @type {number}
 * @const
 */
Node_zlib.prototype.Z_FIXED = 4;

/**
 * @type {number}
 * @const
 */
Node_zlib.prototype.Z_DEFAULT_STRATEGY = 0;



/**
 * @type {number}
 * @const
 */
Node_zlib.prototype.Z_BINARY = 0;

/**
 * @type {number}
 * @const
 */
Node_zlib.prototype.Z_TEXT = 1;

/**
 * @type {number}
 * @const
 */
Node_zlib.prototype.Z_ASCII = 1;

/**
 * @type {number}
 * @const
 */
Node_zlib.prototype.Z_UNKNOWN = 2;



/**
 * @type {number}
 * @const
 */
Node_zlib.prototype.Z_DEFLATED = 8;



/**
 * @type {number}
 * @const
 */
Node_zlib.prototype.Z_NULL = 0;
