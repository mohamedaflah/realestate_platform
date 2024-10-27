"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserController = void 0;
const user_model_1 = __importDefault(require("../../models/user.model"));
const generateToken_1 = require("../../utils/generateToken");
const signup_controller_1 = require("./signup.controller");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const loginUserController = async (req, res, next) => {
    try {
        const { phoneNumber, password } = req.body;
        const userExist = await user_model_1.default.findOne({ phoneNumber: phoneNumber });
        if (!userExist) {
            return res.status(400).json({ status: false, message: "User not found" });
        }
        const passCompare = bcryptjs_1.default.compareSync(password, userExist.password);
        if (!passCompare) {
            return res
                .status(400)
                .json({ status: false, message: "User not found🤔" });
        }
        const token = (0, generateToken_1.generateJWT)({ id: userExist._id });
        res
            .cookie("token", token, signup_controller_1.cookieOptions)
            .status(200)
            .json({ status: true, message: "Login success", user: userExist });
    }
    catch (error) {
        return res.status(500).json({ status: false, message: error.message });
    }
};
exports.loginUserController = loginUserController;
