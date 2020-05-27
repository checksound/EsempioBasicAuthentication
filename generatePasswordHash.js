'use strict'

var myArgs = process.argv.slice(2);
console.log('argomenti: ', myArgs);

const bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);

myArgs.forEach( (argument) => {
    bcrypt.hash(argument, salt, function(err, hash) {
        if(err)
            console.log(err);
        console.log(argument + ' -->> ' + hash);
    });
});

