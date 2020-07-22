import { User } from '../../models/user.model';
import { ESRCH } from 'constants';
import { Request, Response, NextFunction } from 'express';
import { config } from '../../config/app';

/**
 * Library instances
 */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


/**
 * @summary
 */
exports.register = async (request: Request, response: Response, next: NextFunction) => {

    // const errors = validationResult(request);
}

/**
 * @summary Logs a user into the system by checking email
 * @returns A token
 */
exports.login = async (request: any, response: any, next: any) => {

    User.findOne({ where: { email: request.body.email } }).then(user => {

        if (!user) {
            response.status(401);
            response.json({
                "message": "Invalid email or password"
            });

            return;
        }

        bcrypt.compare(request.body.password, user.password, (error: any, result: any) => {

            if (!result) {

                response.status(401);
                response.json({ "message": "Invalid email or password" });
            } else {

                let token = jwt.sign({ id: user.id }, config.auth.secret, { expiresIn: config.auth.expiresIn });

                response.json({
                    "token": token
                });
            }
        });

    });
};


