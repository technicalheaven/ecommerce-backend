import express, { Application, Request, Response, NextFunction } from 'express';
import userRoutes from './modules/user/routes';
import { responseHandler } from './middlewares/responseHandler';
import { errorHandler } from './middlewares/errorHandler';
const app:Application = express();
const port:number = Number(process.env.PORT) || 3000;

// Use the response handler
app.use(responseHandler);

app.use('/users', userRoutes);

// Use the error handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
    