"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserStatus = void 0;
const user_model_1 = __importDefault(require("../../models/user.model"));
const updateUserStatus = async (req, res, next) => {
    try {
        const { userId, status } = req.body;
        await user_model_1.default.updateOne({ _id: userId }, { $set: { status: status } });
        return res.status(200).json({
            status: true,
            message: "User updated",
            userId,
            userStatus: status,
        });
    }
    catch (error) {
        return res
            .status(500)
            .json({ status: false, message: error.message });
    }
};
exports.updateUserStatus = updateUserStatus;
