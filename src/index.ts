import express, { Application, Request, Response, NextFunction } from 'express';
import userRoutes from './modules/user/routes';
import { responseHandler } from './middlewares/responseHandler';
import { errorHandler } from './middlewares/errorHandler';
import logger from './libs/logger/logger';
const app:Application = express();
const port:number = Number(process.env.PORT) || 3000;

// Use the response handler
app.use(responseHandler);

app.use('/users', userRoutes);

// Use the error handler
app.use(errorHandler);

app.listen(port, () => {
  logger.info(`Server is running on http://localhost:${port}`);
});
    