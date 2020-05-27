'use strict'

var myArgs = process.argv.slice(2);
console.log('argomento: ', myArgs[0]);

var encodedData = myArgs[0];

var decodeData = Buffer.from(encodedData, 'base64').toString('ascii');
console.log(decodeData);