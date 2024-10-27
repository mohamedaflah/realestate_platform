"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProperties = void 0;
const property_model_1 = __importDefault(require("../../models/property.model"));
const getAllProperties = async (req, res) => {
    try {
        const { userId, search } = req.query;
        console.log(userId, " =>");
        console.log(req.query);
        const query = {
            status: "publish",
            title: { $regex: search, $options: "i" },
        };
        // if (userId && userId !== "") {
        //   query.userId = { $ne: userId };
        // }
        const properties = await property_model_1.default.find(query);
        return res
            .status(200)
            .json({ status: true, message: "Success", properties });
    }
    catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({ status: false, message: error.message });
    }
};
exports.getAllProperties = getAllProperties;
