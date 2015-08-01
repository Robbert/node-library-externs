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
 * @fileoverview Definitions for node's dns module.
 * @see http://nodejs.org/api/dns.html
 * @see https://github.com/joyent/node/blob/master/lib/dns.js
 * @externs
 * @author Daniel Wirtz <dcode@dcode.io>
 */

/**
 BEGIN_NODE_INCLUDE
 var dns = require('dns');
 END_NODE_INCLUDE
 */

/**
 * @constructor
 */
function Node_dns(){};

/**
 * @param {string} domain
 * @param {string|function(Error,string,string)} family
 * @param {function(?Error,string,string)=} callback
 */
Node_dns.prototype.lookup = function(domain, family, callback) {};

/**
 * @param {string} domain
 * @param {string|function(?Error,Array)} rrtype
 * @param {function(?Error,Array)=}callback
 */
Node_dns.prototype.resolve = function(domain, rrtype, callback) {};

/**
 * @param {string} domain
 * @param {function(?Error,Array)}callback
 */
Node_dns.prototype.resolve4 = function(domain, callback) {};

/**
 * @param {string} domain
 * @param {function(?Error,Array)}callback
 */
Node_dns.prototype.resolve6 = function(domain, callback) {};

/**
 * @param {string} domain
 * @param {function(?Error,Array)}callback
 */
Node_dns.prototype.resolveMx = function(domain, callback) {};

/**
 * @param {string} domain
 * @param {function(?Error,Array)}callback
 */
Node_dns.prototype.resolveTxt = function(domain, callback) {};

/**
 * @param {string} domain
 * @param {function(?Error,Array)}callback
 */
Node_dns.prototype.resolveSrv = function(domain, callback) {};

/**
 * @param {string} domain
 * @param {function(?Error,Array)}callback
 */
Node_dns.prototype.resolveNs = function(domain, callback) {};

/**
 * @param {string} domain
 * @param {function(?Error,Array)}callback
 */
Node_dns.prototype.resolveCname = function(domain, callback) {};

/**
 * @param {string} ip
 * @param {function(?Error,Array)}callback
 */
Node_dns.prototype.reverse = function(ip, callback) {};

/** @const {string} */
Node_dns.prototype.NODATA = 'ENODATA';

/** @const {string} */
Node_dns.prototype.FORMERR = 'EFORMERR';

/** @const {string} */
Node_dns.prototype.SERVFAIL = 'ESERVFAIL';

/** @const {string} */
Node_dns.prototype.NOTFOUND = 'ENOTFOUND';

/** @const {string} */
Node_dns.prototype.NOTIMP = 'ENOTIMP';

/** @const {string} */
Node_dns.prototype.REFUSED = 'EREFUSED';

/** @const {string} */
Node_dns.prototype.BADQUERY = 'EBADQUERY';

/** @const {string} */
Node_dns.prototype.BADNAME = 'EBADNAME';

/** @const {string} */
Node_dns.prototype.BADFAMILY = 'EBADFAMILY';

/** @const {string} */
Node_dns.prototype.BADRESP = 'EBADRESP';

/** @const {string} */
Node_dns.prototype.CONNREFUSED = 'ECONNREFUSED';

/** @const {string} */
Node_dns.prototype.TIMEOUT = 'ETIMEOUT';

/** @const {string} */
Node_dns.prototype.EOF = 'EOF';

/** @const {string} */
Node_dns.prototype.FILE = 'EFILE';

/** @const {string} */
Node_dns.prototype.NOMEM = 'ENOMEM';

/** @const {string} */
Node_dns.prototype.DESTRUCTION = 'EDESTRUCTION';

/** @const {string} */
Node_dns.prototype.BADSTR = 'EBADSTR';

/** @const {string} */
Node_dns.prototype.BADFLAGS = 'EBADFLAGS';

/** @const {string} */
Node_dns.prototype.NONAME = 'ENONAME';

/** @const {string} */
Node_dns.prototype.BADHINTS = 'EBADHINTS';

/** @const {string} */
Node_dns.prototype.NOTINITIALIZED = 'ENOTINITIALIZED';

/** @const {string} */
Node_dns.prototype.LOADIPHLPAPI = 'ELOADIPHLPAPI';

/** @const {string} */
Node_dns.prototype.ADDRGETNETWORKPARAMS = 'EADDRGETNETWORKPARAMS';

/** @const {string} */
Node_dns.prototype.CANCELLED = 'ECANCELLED';
