import { Request, Response } from "express";
import { ErrType } from "./addproperty.controller";
import propertyModel from "../../models/property.model";

export const getAllProperties = async (req: Request, res: Response) => {
  try {
    const properties = await propertyModel.find({ status: true });
    return res
      .status(200)
      .json({ status: false, message: "Success", properties });
  } catch (error: ErrType) {
    return res
      .status(500)
      .json({ status: false, message: (error as any).message });
  }
};
