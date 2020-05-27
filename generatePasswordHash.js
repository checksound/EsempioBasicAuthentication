'use strict'

var myArgs = process.argv.slice(2);
console.log('argomenti: ', myArgs);

const bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);

bcrypt.hash('secret', salt, function(err, hash) {
    if(err)
        console.log(err);
    console.log(hash);
  });

