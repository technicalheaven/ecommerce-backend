import express, { Application, Request, Response, NextFunction } from 'express';
import userRoutes from './modules/user/routes';
import { responseHandler } from './middlewares/responseHandler';
import { errorHandler } from './middlewares/errorHandler';
import logger from './libs/logger/logger';
import bodyParser from 'body-parser';
import cors from 'cors';

const app:Application = express();
const port:number = Number(process.env.PORT) || 3000;

// Use the response handler
app.use(responseHandler);

// Setup bodyparser
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors()); // Enable All CORS Requests

app.use('/users', userRoutes);

// Use the error handler
app.use(errorHandler);

app.listen(port, () => {
  logger.info(`Server is running on http://localhost:${port}`);
});
    