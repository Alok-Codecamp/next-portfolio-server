import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { userRoutes } from './app/module/user/user.routes';
import { projectsRoutes } from './app/module/projects/project.routes';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import { blogRoutes } from './app/module/blogs/blogs.routes';

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
// Root route (for checking server status)
app.get('/', (req: Request, res: Response) => {
    res.json('portfolio server running...')
});
// Define routes
app.use('/', userRoutes);
app.use('/', projectsRoutes);
app.use('/', blogRoutes);



// Use global error handler as the last middleware
app.use(globalErrorHandler);

export default app;
