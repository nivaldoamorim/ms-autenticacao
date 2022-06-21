import { error } from "console";
import { NextFunction, Request, Response, Router } from "express";
import ForbiddenErrar from "../models/errors/forbiden.error.model";
import userRepository from "../repositories/user.repository";
import  JWT from 'jsonwebtoken';
import { StatusCodes } from "http-status-codes";
import basicAuthenticationMiddleware from "../middlewares/basic-authentication.middleware";

const authorizationRoute = Router();

authorizationRoute.post('/token', basicAuthenticationMiddleware, async(req: Request, res: Response, next: NextFunction) => {
    try{
        const user = req.user;

        if (!user){
            throw new ForbiddenErrar('Usuario não informado!');
        }

        const jwtPayload = { username: user.username };
        const jwtOptions = { subject: user?.uuid };
        const secretKey = 'my_secret_key';

        const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions);

        res.sendStatus(StatusCodes.OK).json({ token: jwt })

    }catch (error){
        next(error);
    }
});

export default authorizationRoute;