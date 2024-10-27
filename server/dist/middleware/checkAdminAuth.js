"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkisAdmin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = __importDefault(require("../models/user.model"));
const checkisAdmin = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(403).json({ status: false, message: "Not autherized" });
        }
        const payload = jsonwebtoken_1.default.verify(token, "secret");
        if (!payload || !payload?.id) {
            return res.status(403).json({ status: false, message: "Not autherized" });
        }
        const user = await user_model_1.default.findOne({
            _id: payload.id,
        });
        if (user.role !== "admin") {
            return res.status(403).json({
                status: false,
                message: "You don't have access to get this data",
            });
        }
        next();
    }
    catch (error) {
        return res
            .status(500)
            .json({ status: false, message: error.message });
    }
};
exports.checkisAdmin = checkisAdmin;
