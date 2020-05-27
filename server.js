'use strict';

const Bcrypt = require('bcrypt');
const Hapi = require('@hapi/hapi');

// $2b$10$zuTKwNXh1f7YYWv/isExnuAST3Imh6.2UuLInXgbmIRzHmlaWS6U2
const users = {
    john: {
        username: 'john',
        password: '$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm',   // 'secret'
        name: 'John Doe',
        id: '2133d32a'
    }
};

const validate = async (request, username, password) => {

    const user = users[username];
    if (!user) {
        return { credentials: null, isValid: false };
    }

    console.log(password);

    const isValid = await Bcrypt.compare(password, user.password);
    const credentials = { id: user.id, name: user.name };

    return { isValid, credentials };
};

const start = async () => {

    const server = Hapi.server({ port: 4000 });

    await server.register(require('@hapi/basic'));

    server.auth.strategy('simple', 'basic', { validate });

    server.route([{
        method: 'GET',
        path: '/',
        options: {
            auth: 'simple'
        },
        handler: function (request, h) {

            return 'welcome';
        }
    }, {
        method: 'GET',
        path: '/second',
        options: {
            auth: 'simple'
        },
        handler: function (request, h) {

            return 'welcome TO SECOND';
        }
    }]);

    await server.start();

    console.log('server running at: ' + server.info.uri);
};

start();