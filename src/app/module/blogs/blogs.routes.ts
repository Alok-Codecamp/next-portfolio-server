import { Request, Response, Router, NextFunction } from "express";
import { Blog } from "./blogs.model";


const router = Router();

router.post('/create-blog', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const requestData = req.body;
        const result = await Blog.create(requestData);
        res.json({
            status: 200,
            message: 'Blog created successfully',
            data: result
        })
    } catch (err: any) {
        // Pass the error to the next middleware (global error handler)
        next(new Error(err?.message || 'Failed to create project!'));
    }
});

// Get all projects route
router.get('/blogs', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await Blog.find();
        res.json({
            status: 200,
            message: 'Blog retrieved successfully',
            data: result
        })
    } catch (error: any) {
        // Pass the error to the next middleware (global error handler)
        next(new Error(error?.message || 'Data not found!'));
    }
});

// Get project by ID route
router.get('/blogs/:blogId', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { projectId } = req.params;
        const result = await Blog.findById(projectId);
        if (!result) {
            // If project not found, pass error to next middleware
            return next(new Error('Project not found. Maybe project ID is invalid!'));
        }
        res.json({
            status: 200,
            message: 'Project retrieved successfully',
            data: result
        })
    } catch (error: any) {
        // Pass the error to the next middleware (global error handler)
        next(new Error(error?.message || 'Data not found!'));
    }
});

export const blogRoutes = router;
