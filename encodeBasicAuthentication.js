'use strict'

var myArgs = process.argv.slice(2);
console.log('argomenti: ', myArgs);

var username = myArgs[0];
var password = myArgs[1];
var encodedData = Buffer.from(username + ':' + password).toString('base64');
console.log(encodedData);

