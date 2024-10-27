"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePropertyController = void 0;
const property_model_1 = __importDefault(require("../../models/property.model"));
const deletePropertyController = async (req, res) => {
    try {
        const { propertyId } = req.query;
        await property_model_1.default.deleteOne({ _id: propertyId });
        return res.status(200).json({ status: true, propertyId });
    }
    catch (error) {
        return res
            .status(500)
            .json({ status: false, message: error.message });
    }
};
exports.deletePropertyController = deletePropertyController;
