import express from "express";
const app = express();
import mongoose from 'mongoose';    
import dotenv from 'dotenv';
import connectDB from './db/index.js';
 import cookieParser from 'cookie-parser';
import cors from 'cors';

 app.use(cors({
    origin: process.env.CORS_ORIGIN ,
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
    // methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
 }));


 app.use(express.json({
    limit: '16kb', // Increase the limit as needed
 }));
    app.use(express.urlencoded({
        extended: true,
        limit: '16kb', // Increase the limit as needed
    }));
    app.use(express.static('public')); // Serve static files from the 'public' directory
     app.use(cookieParser()); // Parse cookies


     // routes import

      import userRoutes from './routes/user.routes.js';
      // routes decleration
      app.use('/api/users', userRoutes);


export default app;