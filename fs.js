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
 * @fileoverview Definitions for node's fs module. Depends on the stream and events module.
 * @see http://nodejs.org/api/fs.html
 * @see https://github.com/joyent/node/blob/master/lib/fs.js
 * @externs
 * @author Daniel Wirtz <dcode@dcode.io>
 */

/**
 BEGIN_NODE_INCLUDE
 var fs = require('fs');
 END_NODE_INCLUDE
 */

/**
 * @constructor
 */
function Node_fs(){};

/**
 * @param {string} oldPath
 * @param {string} newPath
 * @param {function(...)=} callback
 */
Node_fs.prototype.rename = function(oldPath, newPath, callback) {};

/**
 * @param {string} oldPath
 * @param {string} newPath
 */
Node_fs.prototype.renameSync = function(oldPath, newPath) {};

/**
 * @param {*} fd
 * @param {number} len
 * @param {function(...)=} callback
 */
Node_fs.prototype.truncate = function(fd, len, callback) {};

/**
 * @param {*} fd
 * @param {number} len
 */
Node_fs.prototype.truncateSync = function(fd, len) {};

/**
 * @param {string} path
 * @param {number} uid
 * @param {number} gid
 * @param {function(...)=} callback
 */
Node_fs.prototype.chown = function(path, uid, gid, callback) {};

/**
 * @param {string} path
 * @param {number} uid
 * @param {number} gid
 */
Node_fs.prototype.chownSync = function(path, uid, gid) {};

/**
 * @param {*} fd
 * @param {number} uid
 * @param {number} gid
 * @param {function(...)=} callback
 */
Node_fs.prototype.fchown = function(fd, uid, gid, callback) {};

/**
 * @param {*} fd
 * @param {number} uid
 * @param {number} gid
 */
Node_fs.prototype.fchownSync = function(fd, uid, gid) {};

/**
 * @param {string} path
 * @param {number} uid
 * @param {number} gid
 * @param {function(...)=} callback
 */
Node_fs.prototype.lchown = function(path, uid, gid, callback) {};

/**
 * @param {string} path
 * @param {number} uid
 * @param {number} gid
 */
Node_fs.prototype.lchownSync = function(path, uid, gid) {};

/**
 * @param {string} path
 * @param {number} mode
 * @param {function(...)=} callback
 */
Node_fs.prototype.chmod = function(path, mode, callback) {};

/**
 * @param {string} path
 * @param {number} mode
 */
Node_fs.prototype.chmodSync = function(path, mode) {};

/**
 * @param {*} fd
 * @param {number} mode
 * @param {function(...)=} callback
 */
Node_fs.prototype.fchmod = function(fd, mode, callback) {};

/**
 * @param {*} fd
 * @param {number} mode
 */
Node_fs.prototype.fchmodSync = function(fd, mode) {};

/**
 * @param {string} path
 * @param {number} mode
 * @param {function(...)=} callback
 */
Node_fs.prototype.lchmod = function(path, mode, callback) {};

/**
 * @param {string} path
 * @param {number} mode
 */
Node_fs.prototype.lchmodSync = function(path, mode) {};

/**
 * @param {string} path
 * @param {function(string, Node_fs_Stats)=} callback
 */
Node_fs.prototype.stat = function(path, callback) {};

/**
 * @param {string} path
 * @return {Node_fs_Stats}
 * @nosideeffects
 */
Node_fs.prototype.statSync = function(path) {}

/**
 * @param {*} fd
 * @param {function(string, Node_fs_Stats)=} callback
 */
Node_fs.prototype.fstat = function(fd, callback) {};

/**
 * @param {*} fd
 * @return {Node_fs_Stats}
 * @nosideeffects
 */
Node_fs.prototype.fstatSync = function(fd) {}

/**
 * @param {string} path
 * @param {function(string, Node_fs_Stats)=} callback
 */
Node_fs.prototype.lstat = function(path, callback) {};

/**
 * @param {string} path
 * @return {Node_fs_Stats}
 * @nosideeffects
 */
Node_fs.prototype.lstatSync = function(path) {}

/**
 * @param {string} srcpath
 * @param {string} dstpath
 * @param {function(...)=} callback
 */
Node_fs.prototype.link = function(srcpath, dstpath, callback) {};

/**
 * @param {string} srcpath
 * @param {string} dstpath
 */
Node_fs.prototype.linkSync = function(srcpath, dstpath) {};

/**
 * @param {string} srcpath
 * @param {string} dstpath
 * @param {string=} type
 * @param {function(...)=} callback
 */
Node_fs.prototype.symlink = function(srcpath, dstpath, type, callback) {};

/**
 * @param {string} srcpath
 * @param {string} dstpath
 * @param {string=} type
 */
Node_fs.prototype.symlinkSync = function(srcpath, dstpath, type) {};

/**
 * @param {string} path
 * @param {function(string, string)=} callback
 */
Node_fs.prototype.readlink = function(path, callback) {};

/**
 * @param {string} path
 * @return {string}
 * @nosideeffects
 */
Node_fs.prototype.readlinkSync = function(path) {};

/**
 * @param {string} path
 * @param {Object.<string,string>|function(string, string)=} cache
 * @param {function(string, string)=} callback
 */
Node_fs.prototype.realpath = function(path, cache, callback) {};

/**
 * @param {string} path
 * @param {Object.<string,string>=} cache
 * @return {string}
 * @nosideeffects
 */
Node_fs.prototype.realpathSync = function(path, cache) {};

/**
 * @param {string} path
 * @param {function(...)=} callback
 */
Node_fs.prototype.unlink = function(path, callback) {};

/**
 * @param {string} path
 */
Node_fs.prototype.unlinkSync = function(path) {};

/**
 * @param {string} path
 * @param {function(...)=} callback
 */
Node_fs.prototype.rmdir = function(path, callback) {};

/**
 * @param {string} path
 */
Node_fs.prototype.rmdirSync = function(path) {};

/**
 * @param {string} path
 * @param {number=} mode
 * @param {function(...)=} callback
 */
Node_fs.prototype.mkdir = function(path, mode, callback) {};

/**
 * @param {string} path
 * @param {number=} mode
 */
Node_fs.prototype.mkdirSync = function(path, mode) {};

/**
 * @param {string} path
 * @param {function(string,Array.<string>)=} callback
 */
Node_fs.prototype.readdir = function(path, callback) {};

/**
 * @param {string} path
 * @return {Array.<string>}
 * @nosideeffects
 */
Node_fs.prototype.readdirSync = function(path) {};

/**
 * @param {*} fd
 * @param {function(...)=} callback
 */
Node_fs.prototype.close = function(fd, callback) {};

/**
 * @param {*} fd
 */
Node_fs.prototype.closeSync = function(fd) {};

/**
 * @param {string} path
 * @param {string} flags
 * @param {number=} mode
 * @param {function(string, *)=} callback
 */
Node_fs.prototype.open = function(path, flags, mode, callback) {};

/**
 * @param {string} path
 * @param {string} flags
 * @param {number=} mode
 * @return {*}
 * @nosideeffects
 */
Node_fs.prototype.openSync = function(path, flags, mode) {};

/**
 * @param {string} path
 * @param {number|Date} atime
 * @param {number|Date} mtime
 * @param {function(...)=} callback
 */
Node_fs.prototype.utimes = function(path, atime, mtime, callback) {};

/**
 * @param {string} path
 * @param {number|Date} atime
 * @param {number|Date} mtime
 * @nosideeffects
 */
Node_fs.prototype.utimesSync = function(path, atime, mtime) {};

/**
 * @param {*} fd
 * @param {number|Date} atime
 * @param {number|Date} mtime
 * @param {function(...)=} callback
 */
Node_fs.prototype.futimes = function(fd, atime, mtime, callback) {};

/**
 * @param {*} fd
 * @param {number|Date} atime
 * @param {number|Date} mtime
 * @nosideeffects
 */
Node_fs.prototype.futimesSync = function(fd, atime, mtime) {};

/**
 * @param {*} fd
 * @param {function(...)=} callback
 */
Node_fs.prototype.fsync = function(fd, callback) {};

/**
 * @param {*} fd
 */
Node_fs.prototype.fsyncSync = function(fd) {};

/**
 * @param {*} fd
 * @param {*} buffer
 * @param {number} offset
 * @param {number} length
 * @param {number} position
 * @param {function(string, number, *)=} callback
 */
Node_fs.prototype.write = function(fd, buffer, offset, length, position, callback) {};

/**
 * @param {*} fd
 * @param {*} buffer
 * @param {number} offset
 * @param {number} length
 * @param {number} position
 * @return {number}
 */
Node_fs.prototype.writeSync = function(fd, buffer, offset, length, position) {};

/**
 * @param {*} fd
 * @param {*} buffer
 * @param {number} offset
 * @param {number} length
 * @param {number} position
 * @param {function(string, number, *)=} callback
 */
Node_fs.prototype.read = function(fd, buffer, offset, length, position, callback) {};

/**
 * @param {*} fd
 * @param {*} buffer
 * @param {number} offset
 * @param {number} length
 * @param {number} position
 * @return {number}
 * @nosideeffects
 */
Node_fs.prototype.readSync = function(fd, buffer, offset, length, position) {};

/**
 * @param {string} filename
 * @param {string|{encoding:(string|undefined),flag:(string|undefined)}|function(string, (string|Node_Buffer))=} encodingOrOptions
 * @param {function(string, (string|Node_Buffer))=} callback
 */
Node_fs.prototype.readFile = function(filename, encodingOrOptions, callback) {};

/**
 * @param {string} filename
 * @param {string|{encoding:(string|undefined),flag:(string|undefined)}=} encodingOrOptions
 * @return {string|Node_Buffer}
 * @nosideeffects
 */
Node_fs.prototype.readFileSync = function(filename, encodingOrOptions) {};

/**
 * @param {string} filename
 * @param {*} data
 * @param {string|{encoding:(string|undefined),mode:(number|undefined),flag:(string|undefined)}|function(string)=} encodingOrOptions
 * @param {function(string)=} callback
 */
Node_fs.prototype.writeFile = function(filename, data, encodingOrOptions, callback) {};

/**
 * @param {string} filename
 * @param {*} data
 * @param {string|{encoding:(string|undefined),mode:(number|undefined),flag:(string|undefined)}|function(string)=} encodingOrOptions
 */
Node_fs.prototype.writeFileSync = function(filename, data, encodingOrOptions) {};

/**
 * @param {string} filename
 * @param {*} data
 * @param {string|function(string)=} encoding
 * @param {function(string)=} callback
 */
Node_fs.prototype.appendFile = function(filename, data, encoding, callback) {};

/**
 * @param {string} filename
 * @param {*} data
 * @param {string|function(string)=} encoding
 */
Node_fs.prototype.appendFileSync = function(filename, data, encoding) {};

/**
 * @param {string} filename
 * @param {{persistent: boolean, interval: number}|function(*,*)=} options
 * @param {function(*,*)=} listener
 */
Node_fs.prototype.watchFile = function(filename, options, listener) {};

/**
 * @param {string} filename
 * @param {function(string, string)=} listener
 */
Node_fs.prototype.unwatchFile = function(filename, listener) {};

/**
 * @suppress {checkTypes}
 * @override Remember Object.prototype.watch?
 * 
 * @param {string} filename
 * @param {{persistent: boolean}|function(string, string)=} options
 * @param {function(string, string)=} listener
 * @return {Node_FSWatcher}
 */
Node_fs.prototype.watch = function(filename, options, listener) {};

/**
 * @param {string} path
 * @param {function(boolean)} callback
 */
Node_fs.prototype.exists = function(path, callback) {};

/**
 * @param {string} path
 * @nosideeffects
 */
Node_fs.prototype.existsSync = function(path) {};

/** @type {function(new:Node_fs_Stats)} */
Node_fs.prototype.Stats;

/**
 * @constructor
 */
function Node_fs_Stats() {};

/**
 * @return {boolean}
 * @nosideeffects
 */
Node_fs_Stats.prototype.isFile = function() {};

/**
 * @return {boolean}
 * @nosideeffects
 */
Node_fs_Stats.prototype.isDirectory = function() {};

/**
 * @return {boolean}
 * @nosideeffects
 */
Node_fs_Stats.prototype.isBlockDevice = function() {};

/**
 * @return {boolean}
 * @nosideeffects
 */
Node_fs_Stats.prototype.isCharacterDevice = function() {};

/**
 * @return {boolean}
 * @nosideeffects
 */
Node_fs_Stats.prototype.isSymbolicLink = function() {};

/**
 * @return {boolean}
 * @nosideeffects
 */
Node_fs_Stats.prototype.isFIFO = function() {};

/**
 * @return {boolean}
 * @nosideeffects
 */
Node_fs_Stats.prototype.isSocket = function() {};

/**
 * @type {number}
 */
Node_fs_Stats.prototype.dev = 0;

/**
 * @type {number}
 */
Node_fs_Stats.prototype.ino = 0;

/**
 * @type {number}
 */
Node_fs_Stats.prototype.mode = 0;

/**
 * @type {number}
 */
Node_fs_Stats.prototype.nlink = 0;

/**
 * @type {number}
 */
Node_fs_Stats.prototype.uid = 0;

/**
 * @type {number}
 */
Node_fs_Stats.prototype.gid = 0;

/**
 * @type {number}
 */
Node_fs_Stats.prototype.rdev = 0;

/**
 * @type {number}
 */
Node_fs_Stats.prototype.size = 0;

/**
 * @type {number}
 */
Node_fs_Stats.prototype.blkSize = 0;

/**
 * @type {number}
 */
Node_fs_Stats.prototype.blocks = 0;

/**
 * @type {Date}
 */
Node_fs_Stats.prototype.atime;

/**
 * @type {Date}
 */
Node_fs_Stats.prototype.mtime;

/**
 * @type {Date}
 */
Node_fs_Stats.prototype.ctime;

/**
 * @param {string} path
 * @param {{flags: string, encoding: ?string, fd: *, mode: number, bufferSize: number}=} options
 * @return {Node_fs_ReadStream}
 * @nosideeffects
 */
Node_fs.prototype.createReadStream = function(path, options) {};

/** @type {function(new:Node_fs_ReadStream)} */
Node_fs.prototype.ReadStream;

/**
 * @constructor
 * @extends {Node_ReadableStream}
 */
function Node_fs_ReadStream() {};

/**
 * @param {string} path
 * @param {{flags: string, encoding: ?string, mode: number}=} options
 * @return {Node_fs_WriteStream}
 * @nosideeffects
 */
Node_fs.prototype.createWriteStream = function(path, options) {};

/** @type {function(new:Node_fs_WriteStream)} */
Node_fs.prototype.WriteStream;

/**
 * @constructor
 * @extends {Node_WritableStream}
 */
function Node_fs_WriteStream() {};

/**
 * @constructor
 * @extends {Node_EventEmitter}
 */
function Node_FSWatcher() {};

/**
 */
Node_FSWatcher.prototype.close = function() {};
