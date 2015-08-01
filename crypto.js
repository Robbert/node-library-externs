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
 * @fileoverview Definitions for node's crypto module. Depends on the buffer module.
 * @see http://nodejs.org/api/crypto.html
 * @see https://github.com/joyent/node/blob/master/lib/crypto.js
 * @externs
 * @author Daniel Wirtz <dcode@dcode.io>
 */

/**
 BEGIN_NODE_INCLUDE
 var crypto = require('crypto');
 END_NODE_INCLUDE
 */

/**
 * @constructor
 */
function Node_crypto(){}

/**
 * @type {string}
 */
Node_crypto.prototype.DEFAULT_ENCODING;

/**
 * @typedef {{pfx: (string|Node_Buffer), key: (string|Node_Buffer), passphrase: string, cert: (string|Node_Buffer), ca: Array.<string|Node_Buffer>, crl: (string|Array.<string>), ciphers: string}}
 */
Node_crypto.Credentials;

/**
 * @param {Object.<string,string>=} details
 * @return {Node_crypto.Credentials}
 */
Node_crypto.prototype.createCredentials = function(details) {};

/**
 * @param {string} algorithm
 * @return {Node_crypto_Hash}
 */
Node_crypto.prototype.createHash = function(algorithm) {};

/** @type {function(new:Node_crypto_Hash, string, Object=)} */
Node_crypto.prototype.Hash;

/**
 * @param {string} algorithm
 * @param {Object=} options
 * @constructor
 * @extends {Node_Transform}
 */
function Node_crypto_Hash(algorithm, options) {};

/**
 * @param {string|Node_Buffer} data
 * @param {string=} input_encoding
 */
Node_crypto_Hash.prototype.update = function(data, input_encoding) {};

/**
 * @param {string=} encoding
 * @return {string}
 */
Node_crypto_Hash.prototype.digest = function(encoding) {};

/**
 * @param {string} algorithm
 * @param {string|Node_Buffer} key
 * @return {Node_crypto_Hmac}
 */
Node_crypto.prototype.createHmac = function(algorithm, key) {};

/** @type {function(new:Node_crypto_Hmac, string, (string|Node_Buffer), Object=)} */
Node_crypto.prototype.Hmac;

/**
 * @param {string} hmac
 * @param {string|Node_Buffer} key
 * @param {Object=} options
 * @constructor
 * @extends {Node_Transform}
 */
function Node_crypto_Hmac(hmac, key, options) {};

/**
 * @param {string|Node_Buffer} data
 */
Node_crypto_Hmac.prototype.update = function(data) {};

/**
 * @param {string} encoding
 */
Node_crypto_Hmac.prototype.digest = function(encoding) {};

/**
 * @param {string} algorithm
 * @param {string|Node_Buffer} password
 * @return {Node_crypto_Cipher}
 */
Node_crypto.prototype.createCipher = function(algorithm, password) {};

/**
 * @param {string} algorithm
 * @param {string|Node_Buffer} key
 * @param {string|Node_Buffer} iv
 * @return {Node_crypto_Cipheriv}
 */
Node_crypto.prototype.createCipheriv = function(algorithm, key, iv) {};

/** @type {function(new:Node_crypto_Cipher, (string|Node_Buffer), string, Object=)} */
Node_crypto.prototype.Cipher;

/**
 * @param {string|Node_Buffer} cipher
 * @param {string} password
 * @param {Object=} options
 * @constructor
 * @extends {Node_Transform}
 */
function Node_crypto_Cipher(cipher, password, options) {};

/**
 * @param {string|Node_Buffer} data
 * @param {string=} input_encoding
 * @param {string=} output_encoding
 * @return {string|Node_Buffer}
 */
Node_crypto_Cipher.prototype.update = function(data, input_encoding, output_encoding) {};

/**
 * @name crypto.Cipher.prototype.final
 * @param {string} output_encoding
 * @return {string|Node_Buffer}
 */
Node_crypto_Cipher.prototype['final'] = function(output_encoding) {};

/**
 * @param {boolean=} auto_padding
 */
Node_crypto_Cipher.prototype.setAutoPadding = function(auto_padding) {};

/** @type {function(new:Node_crypto_Cipheriv, string, (string|Node_Buffer), (string|Node_Buffer))} */
Node_crypto.prototype.Cipheriv;

/**
 * Note:  Cipheriv mixes update, final, and setAutoPadding from Cipher but
 * doesn't inherit directly from Cipher.
 *
 * @param {string} cipher
 * @param {string|Node_Buffer} key
 * @param {string|Node_Buffer} iv
 * @constructor
 * @extends {Node_Transform}
 */
function Node_crypto_Cipheriv(cipher, key, iv) {};

/**
 * @param {string|Node_Buffer} data
 * @param {string=} input_encoding
 * @param {string=} output_encoding
 * @return {string|Node_Buffer}
 */
Node_crypto_Cipheriv.prototype.update = function(data, input_encoding, output_encoding) {};

/**
 * @name crypto.Cipheriv.prototype.final
 * @param {string} output_encoding
 * @return {string|Node_Buffer}
 */
Node_crypto_Cipheriv.prototype['final'] = function(output_encoding) {};

/**
 * @param {boolean=} auto_padding
 */
Node_crypto_Cipheriv.prototype.setAutoPadding = function(auto_padding) {};

/**
 * @param {string} algorithm
 * @param {string|Node_Buffer} password
 * @return {Node_crypto_Decipher}
 */
Node_crypto.prototype.createDecipher = function(algorithm, password) {};

/**
 * @param {string} algorithm
 * @param {string|Node_Buffer} key
 * @param {string|Node_Buffer} iv
 * @return {Node_crypto_Decipheriv}
 */
Node_crypto.prototype.createDecipheriv = function(algorithm, key, iv) {};

/** @type {function(new:Node_crypto_Decipher, (string|Node_Buffer), (string|Node_Buffer), Object=)} */
Node_crypto.prototype.Decipher;

/**
 * Note:  Decipher mixes update, final, and setAutoPadding from Cipher but
 * doesn't inherit directly from Cipher.
 *
 * @param {string|Node_Buffer} cipher
 * @param {string|Node_Buffer} password
 * @param {Object=} options
 * @constructor
 * @extends {Node_Transform}
 */
function Node_crypto_Decipher(cipher, password, options) {}

/**
 * @param {string|Node_Buffer} data
 * @param {string=} input_encoding
 * @param {string=} output_encoding
 * @return {string|Node_Buffer}
 */
Node_crypto_Decipher.prototype.update = function(data, input_encoding, output_encoding) {};

/**
 * @name crypto.Decipher.prototype.final
 * @param {string} output_encoding
 * @return {string|Node_Buffer}
 */
Node_crypto_Decipher.prototype['final'] = function(output_encoding) {};

/**
 * @param {string} output_encoding
 * @return {string|Node_Buffer}
 */
Node_crypto_Decipher.prototype.finaltol = function(output_encoding) {};

/**
 * @param {boolean=} auto_padding
 */
Node_crypto_Decipher.prototype.setAutoPadding = function(auto_padding) {};

/** @type {function(new:Node_crypto_Decipheriv, (string|Node_Buffer|Node_crypto_Decipheriv), (string|Node_Buffer), (string|Node_Buffer))} */
Node_crypto.prototype.Decipheriv;

/**
 * Note:  Decipheriv mixes update, final, and setAutoPadding from Cipher but
 * doesn't inherit directly from Cipher.
 *
 * @param {string|Node_Buffer|Node_crypto_Decipheriv} cipher
 * @param {string|Node_Buffer} key
 * @param {string|Node_Buffer} iv
 * @param {Object=} options
 * @constructor
 * @extends {Node_Transform}
 */
function Node_crypto_Decipheriv(cipher, key, iv, options) {};

/**
 * @param {string|Node_Buffer} data
 * @param {string=} input_encoding
 * @param {string=} output_encoding
 * @return {string|Node_Buffer}
 */
Node_crypto_Decipheriv.prototype.update = function(data, input_encoding, output_encoding) {};

/**
 * @name crypto.Decipheriv.prototype.final
 * @param {string} output_encoding
 * @return {string|Node_Buffer}
 */
Node_crypto_Decipheriv.prototype['final'] = function(output_encoding) {};

/**
 * @param {string} output_encoding
 * @return {string|Node_Buffer}
 */
Node_crypto_Decipheriv.prototype.finaltol = function(output_encoding) {};

/**
 * @param {boolean=} auto_padding
 */
Node_crypto_Decipheriv.prototype.setAutoPadding = function(auto_padding) {};

/**
 * @param {string} algorithm
 * @return {Node_crypto_Sign}
 */
Node_crypto.prototype.createSign = function(algorithm) {};

/** @type {function(new:Node_crypto_Sign, string, Object=)} */
Node_crypto.prototype.Sign;

/**
 * @param {string} algorithm
 * @param {Object=} options
 * @constructor
 * @extends {Node_Writable}
 */
function Node_crypto_Sign(algorithm, options) {};

/**
 * @param {string|Node_Buffer} data
 */
Node_crypto_Sign.prototype.update = function(data) {};

/**
 * @param {string} private_key
 * @param {string=} output_format
 * @return {string|Node_Buffer}
 */
Node_crypto_Sign.prototype.sign = function(private_key, output_format) {};

/**
 * @param {string} algorithm
 * @return crypto.Verify
 */
Node_crypto.prototype.createVerify = function(algorithm) {};

/** @type {function(new:Node_crypto_Verify, string, Object=)} */
Node_crypto.prototype.Verify;

/**
 * @param {string} algorithm
 * @param {Object=} options
 * @constructor
 * @extends {Node_Writable}
 */
function Node_crypto_Verify(algorithm, options) {};

/**
 * @param {string|Node_Buffer} data
 */
Node_crypto_Verify.prototype.update = function(data) {};

/**
 * @param {string} object
 * @param {string|Node_Buffer} signature
 * @param {string=} signature_format
 * @return {boolean}
 */
Node_crypto_Verify.prototype.verify = function(object, signature, signature_format) {};

/**
 * @param {number} prime
 * @param {string=} encoding
 * @return {Node_crypto_DiffieHellman}
 */
Node_crypto.prototype.createDiffieHellman = function(prime, encoding) {};


/** @type {function(new:Node_crypto_DiffieHellman, number, string=)} */
Node_crypto.prototype.DiffieHellman;

/**
 * @param {number} sizeOrKey
 * @param {string=} encoding
 * @constructor
 */
function Node_crypto_DiffieHellman(sizeOrKey, encoding) {};

/**
 * @param {string=} encoding
 * @return {string|Node_Buffer}
 */
Node_crypto_DiffieHellman.prototype.generateKeys = function(encoding) {};

/**
 * @param {string|Node_Buffer} key
 * @param {string=} inEnc
 * @param {string=} outEnc
 * @return {string|Node_Buffer}
 */
Node_crypto_DiffieHellman.prototype.computeSecret = function(key, inEnc, outEnc) {};

/**
 * @param {string=} encoding
 * @return {string|Node_Buffer}
 */
Node_crypto_DiffieHellman.prototype.getPrime = function(encoding) {};

/**
 * @param {string=} encoding
 * @return {string|Node_Buffer}
 */
Node_crypto_DiffieHellman.prototype.getGenerator = function(encoding) {};

/**
 * @param {string=} encoding
 * @return {string|Node_Buffer}
 */
Node_crypto_DiffieHellman.prototype.getPublicKey = function(encoding) {};

/**
 * @param {string} encoding
 * @return {string|Node_Buffer}
 */
Node_crypto_DiffieHellman.prototype.getPrivateKey = function(encoding) {}

/**
 * @param {string|Node_Buffer} key
 * @param {string=} encoding
 * @return {Node_crypto_DiffieHellman}
 */
Node_crypto_DiffieHellman.prototype.setPublicKey = function(key, encoding) {};

/**
 * @param {string|Node_Buffer} key
 * @param {string=} encoding
 * @return {Node_crypto_DiffieHellman}
 */
Node_crypto_DiffieHellman.prototype.setPrivateKey = function(key, encoding) {};

/** @type {function(new:Node_crypto_DiffieHellmanGroup, string)} */
Node_crypto.prototype.DiffieHellmanGroup;

/**
 * Note:  DiffieHellmanGroup mixes DiffieHellman but doesn't inherit directly.
 *
 * @param {string} name
 * @constructor
 */
function Node_crypto_DiffieHellmanGroup(name) {};

/**
 * @param {string=} encoding
 * @return {string|Node_Buffer}
 */
Node_crypto_DiffieHellmanGroup.prototype.generateKeys = function(encoding) {};

/**
 * @param {string|Node_Buffer} key
 * @param {string=} inEnc
 * @param {string=} outEnc
 * @return {string|Node_Buffer}
 */
Node_crypto_DiffieHellmanGroup.prototype.computeSecret = function(key, inEnc, outEnc) {};

/**
 * @param {string=} encoding
 * @return {string|Node_Buffer}
 */
Node_crypto_DiffieHellmanGroup.prototype.getPrime = function(encoding) {};

/**
 * @param {string=} encoding
 * @return {string|Node_Buffer}
 */
Node_crypto_DiffieHellmanGroup.prototype.getGenerator = function(encoding) {};

/**
 * @param {string=} encoding
 * @return {string|Node_Buffer}
 */
Node_crypto_DiffieHellmanGroup.prototype.getPublicKey = function(encoding) {};

/**
 * @param {string} encoding
 * @return {string|Node_Buffer}
 */
Node_crypto_DiffieHellmanGroup.prototype.getPrivateKey = function(encoding) {}

/**
 * @param {string|Node_Buffer} key
 * @param {string=} encoding
 * @return {Node_crypto_DiffieHellmanGroup}
 */
Node_crypto_DiffieHellmanGroup.prototype.setPublicKey = function(key, encoding) {};

/**
 * @param {string|Node_Buffer} key
 * @param {string=} encoding
 * @return {Node_crypto_DiffieHellmanGroup}
 */
Node_crypto_DiffieHellmanGroup.prototype.setPrivateKey = function(key, encoding) {};

/**
 * @param {string} group_name
 * @return {Node_crypto_DiffieHellmanGroup}
 */
Node_crypto.prototype.getDiffieHellman = function(group_name) {};

/**
 * @param {string|Node_Buffer} password
 * @param {string|Node_Buffer} salt
 * @param {number} iterations
 * @param {number} keylen
 * @param {function(*, string)} callback
 */
Node_crypto.prototype.pbkdf2 = function(password, salt, iterations, keylen, callback) {};

/**
 * @param {string|Node_Buffer} password
 * @param {string|Node_Buffer} salt
 * @param {number} iterations
 * @param {number} keylen
 */
Node_crypto.prototype.pbkdf2Sync = function(password, salt, iterations, keylen) {};

/**
 * @param {number} size
 * @param {function(Error, Node_Buffer)=} callback
 */
Node_crypto.prototype.randomBytes = function(size, callback) {};

/**
 * @param {number} size
 * @param {function(Error, Node_Buffer)=} callback
 */
Node_crypto.prototype.pseudoRandomBytes = function(size, callback) {};

/**
 * @param {number} size
 * @param {function(Error, Node_Buffer)=} callback
 */
Node_crypto.prototype.rng = function(size, callback) {};

/**
 * @param {number} size
 * @param {function(Error, Node_Buffer)=} callback
 */
Node_crypto.prototype.prng = function(size, callback) {};

/**
 * @return {Array.<string>}
 */
Node_crypto.prototype.getCiphers = function() {};

/**
 * @return {Array.<string>}
 */
Node_crypto.prototype.getHashes = function() {};
