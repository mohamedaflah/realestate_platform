import { NextFunction, Request, Response } from "express";

export const loginUserController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    try {
        
    } catch (error:any) {
        return res.status(500).json({status:false,message:error.message})
    }
};
