import { User } from "../../models/user.model";
import { Request, Response, NextFunction } from 'express';
import { config } from '../../config/app';
import { Sequelize } from 'sequelize-typescript'

let jwt = require('jsonwebtoken');


module.exports = (request: any, response: any, next: any) => {
    let token = request.headers['x-access-token'] || request.headers['authorization']; // Express headers are auto converted to lowercase
    if (token != undefined && token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
    }

    if (token) {
        jwt.verify(token, config.auth.secret, (error: any, decoded: any) => {
            if (error) {
                response.status(401);
                return response.json({
                    success: false,
                    message: 'Token is not valid'
                });
            } else {

                User.findByPk(decoded.id).then(user => {
                    request.user = user;
                    next();
                });

            }
        });
    } else {
        response.status(401);
        return response.json({
            success: false,
            message: 'Auth token is not supplied'
        });
    }
};