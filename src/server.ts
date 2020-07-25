import { initializeDb } from './db/database';
import { HttpError } from '../src/http/HttpError';
import express, { Application, Request, Response, NextFunction } from 'express';
import { config } from './config/app';

// import { Error } from 'sequelize/types';

/***
 * Library instances
 */

/***
 * Application includes
 */
let routes = require('./http/routes/index');

/***
 * Database
 */
const sequelize = initializeDb();

/***
 * Configure server
 */
let server: Application = express();

server.use((request: Request, response: Response, next: NextFunction) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', '*');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token, content-type');

    next();
});

server.use('/', routes);

// Catch 404
server.use((request: Request, response: Response, next: NextFunction) => {
    let err = new HttpError('Not Found');
    err.status = 404;
    next(err);
});

// Handle errors
server.use((error: any, request: any, response: any, next: any) => {
    console.log(error.stack);
    console.log('dfdkf');
    response.locals.message = error.message;
    // response.locals.error = request.app.get('env') === 'development' ? error : {};

    // Render error page
    response.status(error.name || 500);

    response.json({
        "message": error.message,
        "error": error
    });
});

if (!module.parent) {
    server.listen(config.port, function () {
        console.log(`app is listening at http://localhost:${config.port}`);
    });

    // // Listener for socket.io
    // http.listen(config.socketPort, '0.0.0.0');
}
export default server;