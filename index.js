'use strict';

const Hapi = require('@hapi/hapi');
const port = 3000;

const init = async () => {

    const server = Hapi.server({
        port: process.env.PORT || port
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return 'Welcome to the Merit Badge Tracker API';
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
