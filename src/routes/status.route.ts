import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";


const statusroute = Router();

statusroute.get('/status', (req: Request, res: Response, naxt: NextFunction) => {
    res.sendStatus(StatusCodes.OK);
})

export default statusroute