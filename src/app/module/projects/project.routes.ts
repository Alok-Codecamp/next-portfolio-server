import { Request, Response, Router, NextFunction } from "express";
import { Project } from "./projects.model";

const router = Router();

router.post('/create-project', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const requestData = req.body;
        const result = await Project.create(requestData);
        res.json({
            status: 200,
            message: 'Projects created successfully',
            data: result
        })
    } catch (err: any) {
        // Pass the error to the next middleware (global error handler)
        next(new Error(err?.message || 'Failed to create project!'));
    }
});

// Get all projects route
router.get('/projects', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await Project.find();
        res.json({
            status: 200,
            message: 'Projects retrieved successfully',
            data: result
        })
    } catch (error: any) {
        // Pass the error to the next middleware (global error handler)
        next(new Error(error?.message || 'Data not found!'));
    }
});

// Get project by ID route
router.get('/projects/:projectId', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { projectId } = req.params;
        const result = await Project.findById(projectId);
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

export const projectsRoutes = router;
