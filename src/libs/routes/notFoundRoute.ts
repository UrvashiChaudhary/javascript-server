import { Request, Response, NextFunction, request, response } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
    next({
        error: 'Not Found',
        code: 404
    });

};