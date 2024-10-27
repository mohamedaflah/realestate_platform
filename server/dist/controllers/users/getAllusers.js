"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllusersController = void 0;
const user_model_1 = __importDefault(require("../../models/user.model"));
const getAllusersController = async (req, res, next) => {
    try {
        const users = await user_model_1.default.find({ role: "user" });
        return res.status(200).json({ status: true, message: "Success", users });
    }
    catch (error) {
        return res
            .status(500)
            .json({ status: false, message: error.message });
    }
};
exports.getAllusersController = getAllusersController;
