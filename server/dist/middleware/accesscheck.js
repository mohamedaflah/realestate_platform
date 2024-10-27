"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAccessCheck = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const userAccessCheck = async (req, res, next) => {
    try {
        const { phoneNumber } = req.body;
        const user = await user_model_1.default.findOne({ phoneNumber: phoneNumber });
        if (!user) {
            return res
                .status(400)
                .json({ status: false, message: "user not exists" });
        }
        if (!user.status) {
            return res
                .status(401)
                .json({ status: false, message: "Your access has denied by admin" });
        }
        next();
    }
    catch (error) {
        return res
            .status(500)
            .json({ status: false, message: error.message });
    }
};
exports.userAccessCheck = userAccessCheck;
