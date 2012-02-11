var CSSLint = require('./csslint-node').CSSLint;

exports.verify = function(source, options) {
    'use strict';
 
    var res;
        res = CSSLint.verify(source, options);
 
    return res;
 };
