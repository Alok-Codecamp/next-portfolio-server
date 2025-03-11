import { NextFunction, Request, Response, Router } from "express";
import { authValidator } from "../../middleware/authValidator";
import { UserModel } from "./user.model";



const router = Router();

router.post('/register', authValidator('alok'), async (req: Request, res: Response) => {

    const result = await UserModel.create(req.body)
    res.json({
        status: 200,
        message: 'user registerd successfully',
        data: result
    })
},)


export const userRoutes = router;