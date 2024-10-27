"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPropertyWithId = void 0;
const property_model_1 = __importDefault(require("../../models/property.model"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_model_1 = __importDefault(require("../../models/user.model"));
const getPropertyWithId = async (req, res) => {
    try {
        const { propertyId } = req.params;
        const property = await property_model_1.default.aggregate([
            {
                $match: { _id: new mongoose_1.default.Types.ObjectId(propertyId) },
            },
            {
                $lookup: {
                    from: user_model_1.default.collection.name,
                    localField: "userId",
                    foreignField: "_id",
                    as: "user",
                },
            },
            {
                $unwind: "$user",
            },
        ]);
        return res
            .status(200)
            .json({ status: true, property: property[0], message: "Success" });
    }
    catch (error) {
        return res
            .status(500)
            .json({ status: false, message: error.message });
    }
};
exports.getPropertyWithId = getPropertyWithId;
