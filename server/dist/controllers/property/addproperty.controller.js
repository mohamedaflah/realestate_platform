"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPropertyController = void 0;
const property_model_1 = __importDefault(require("../../models/property.model"));
const mongoose_1 = __importDefault(require("mongoose"));
const addPropertyController = async (req, res, next) => {
    try {
        const { body } = req;
        body.userId = new mongoose_1.default.Types.ObjectId(body.userId);
        const property = new property_model_1.default(body);
        await property.save();
        return res
            .status(200)
            .json({ status: true, message: "Successful", property });
    }
    catch (error) {
        return res
            .status(500)
            .json({ status: false, message: error.message });
    }
};
exports.addPropertyController = addPropertyController;
