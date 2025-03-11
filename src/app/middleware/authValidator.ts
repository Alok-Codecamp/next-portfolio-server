import { NextFunction, Request, Response } from "express"

export const authValidator = (name: string) => {
    return (req: Request, res: Response, next: NextFunction) => {

        console.log('test passs', name);
        next();
    }
}