import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import CookieParser from 'cookie-parser';
import httpStatus from 'http-status';
import ApiError from './errors/apiError';
import router from './app/routes';
const helmet = require('helmet');


const app: Application = express();

// app.use(cors({
//     origin: '*'
//   }));
// Use CORS middleware with specific origin
app.use(cors({
  origin: 'http://localhost:3000' || "*",
  credentials: true
}));

app.use(CookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/v1', router);
// app.use((err: any, req: Request, res: Response, next: NextFunction) => {
//     if (err instanceof ApiError) {
//         res.status(err.statusCode).json({ sucess: false, message: err.message })
//     } else {
//         res.status(httpStatus.NOT_FOUND).json({
//             success: false,
//             message: 'Something Went Wrong',
//         });
//     }
//     next();
// })

export default app;