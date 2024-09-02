import { Request, Response } from "express";
import propertyModel from "../../models/property.model";
import mongoose from "mongoose";
import userModel from "../../models/user.model";

export const getPropertyWithId = async (req: Request, res: Response) => {
  try {
    const { propertyId } = req.params;
    const property = await propertyModel.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(propertyId) },
      },
      {
        $lookup: {
          from: userModel.collection.name,
          localField: "userId",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $unwind: "$user",
      },
    ]);
    console.log("🚀 ~ getPropertyWithId ~ property:", property)
    return res
      .status(200)
      .json({ status: true, property: property[0], message: "Success" });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: (error as any).message });
  }
};
