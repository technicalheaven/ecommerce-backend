import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.error(err.message || 'Internal Server Error', 'An error occurred', 500);
};
