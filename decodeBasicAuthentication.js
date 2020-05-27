'use strict'

var username = 'Test';
var password = '123';
var encodedData = Buffer.from(username + ':' + password).toString('base64');
console.log(encodedData);

var decodeData = Buffer.from(encodedData, 'base64').toString('ascii');
console.log(decodeData);