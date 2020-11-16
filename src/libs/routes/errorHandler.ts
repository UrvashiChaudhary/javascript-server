import { Request, Response, NextFunction, request, response } from 'express';

export default (err, req: Request, res: Response, next: NextFunction) => {
  console.log(err);

  res.json({
    error: err.error,
    status: err.code,
    message: err.message || 'Error',
    timestamp: new Date()

  });
};