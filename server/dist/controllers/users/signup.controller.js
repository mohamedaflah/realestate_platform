"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupController = exports.cookieOptions = void 0;
const hashPass_1 = require("../../utils/hashPass");
const user_model_1 = __importDefault(require("../../models/user.model"));
const generateToken_1 = require("../../utils/generateToken");
exports.cookieOptions = {
    expires: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000), // 20 days from now
    httpOnly: true, // This option makes the cookie accessible only by the web server
    // secure: process.env.NODE_ENV === "production", // Send cookie only over HTTPS if in production
    // sameSite: "strict", // Helps protect against CSRF attacks
};
const signupController = async (req, res, next) => {
    try {
        const { body } = req;
        body.password = (0, hashPass_1.hashPassword)(body.password);
        const userExist = await user_model_1.default.findOne({
            phoneNumber: body.phoneNumber,
        });
        if (userExist) {
            return res
                .status(400)
                .json({ status: false, message: "User already exist" });
        }
        const user = await new user_model_1.default(body);
        await user.save();
        delete user.password;
        const token = (0, generateToken_1.generateJWT)({ id: user._id });
        return res
            .cookie("token", token, exports.cookieOptions)
            .status(201)
            .json({ status: true, user, message: "User created" });
    }
    catch (error) {
        return res.status(500).json({ status: false, message: error.message });
    }
};
exports.signupController = signupController;
