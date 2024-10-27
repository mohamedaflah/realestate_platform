"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserDetails = void 0;
const user_model_1 = __importDefault(require("../../models/user.model"));
const validateUserDetails = async (req, res) => {
    try {
        const { email, phoneNumber } = req.body;
        const emailExist = await user_model_1.default.findOne({ email: email });
        if (emailExist) {
            return res
                .status(400)
                .json({ status: false, message: "Email already taken" });
        }
        const phoneNumberExist = await user_model_1.default.findOne({
            phoneNumber: phoneNumber,
        });
        if (phoneNumberExist) {
            return res
                .status(400)
                .json({ status: false, message: "Phone number is already exist" });
        }
        return res.status(200).json({ status: true, message: "Success" });
    }
    catch (error) {
        return res
            .status(500)
            .json({ status: false, message: error.message });
    }
};
exports.validateUserDetails = validateUserDetails;
