"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserController = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = __importDefault(require("../../models/user.model"));
const getUserController = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res
                .status(401)
                .json({ status: false, message: "token not found" });
        }
        const decode = jsonwebtoken_1.default.verify(token, "secret");
        const { id } = decode;
        const user = await user_model_1.default.findOne({ _id: id });
        return res.status(200).json({ status: false, message: "Success", user });
    }
    catch (error) {
        return res.status(500).json({ status: false, message: error.message });
    }
};
exports.getUserController = getUserController;
