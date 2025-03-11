import { NextFunction, Request, Response } from "express";
import dotenv from 'dotenv';
dotenv.config();

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.log(err); // Log the error for debugging purposes

    // Default values for error status and message
    let statusCode = err.statusCode || 500;
    let message = err.message || 'Something went wrong';


    if (err.name === 'ValidationError') {
        statusCode = 400;
        message = err.message || 'Invalid input data';
    }

    // Send the error response and stop further processing
    res.status(statusCode).json({
        success: false,
        message,
        main: err,
        stack: process.env.MODE === 'development' ? err.stack : null
    });
};

export default globalErrorHandler;
