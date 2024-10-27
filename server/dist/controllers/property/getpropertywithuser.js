"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPropertiesWithUser = void 0;
const property_model_1 = __importDefault(require("../../models/property.model"));
const getPropertiesWithUser = async (req, res) => {
    try {
        // const { userId } = req.params;
        const properties = await property_model_1.default.find({});
        return res
            .status(200)
            .json({ status: true, message: "Success", properties });
    }
    catch (error) {
        return res
            .status(500)
            .json({ status: false, message: error.message });
    }
};
exports.getPropertiesWithUser = getPropertiesWithUser;
