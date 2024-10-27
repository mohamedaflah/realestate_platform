"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePropertyController = void 0;
const property_model_1 = __importDefault(require("../../models/property.model"));
const updatePropertyController = async (req, res) => {
    try {
        const { data, propertyId } = req.body;
        const property = await property_model_1.default.updateOne({ _id: propertyId }, { $set: data }, { new: true });
        console.log("🚀 ~ updatePropertyController ~ property:", property);
        return res
            .status(200)
            .json({ status: true, message: "Successful", property, propertyId });
    }
    catch (error) {
        return res
            .status(500)
            .json({ status: false, message: error.message });
    }
};
exports.updatePropertyController = updatePropertyController;
