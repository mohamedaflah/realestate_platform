import { NextFunction, Request, Response } from "express";
import propertyModel from "../../models/property.model";
type ErrType = any;
export const addPropertyController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { body } = req;
    const property = new propertyModel(body);
    await property.save();
    
  } catch (error: ErrType) {
    return res
      .status(500)
      .json({ status: false, message: (error as any).message });
  }
};
