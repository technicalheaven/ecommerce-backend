import { Request, Response, NextFunction } from 'express';

interface ApiResponse {
  success: boolean;
  data?: any;
  message?: string;
  error?: any;
}

declare global {
  namespace Express {
    interface Response {
      success: (data: any, message?: string) => void;
      error: (error: any, message?: string, statusCode?: number) => void;
    }
  }
}

export const responseHandler = (req: Request, res: Response, next: NextFunction) => {
  res.success = (data: any, message: string = 'Success') => {
    const response: ApiResponse = {
      success: true,
      data,
      message
    };
    res.status(200).json(response);
  };

  res.error = (error: any, message: string = 'Error', statusCode: number = 500) => {
    const response: ApiResponse = {
      success: false,
      error,
      message
    };
    res.status(statusCode).json(response);
  };

  next();
};
