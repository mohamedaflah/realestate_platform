"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userModel = new mongoose_1.default.Schema({
    username: String,
    phoneNumber: {
        type: String,
        required: true,
        // unique: true,
    },
    password: {
        required: true,
        type: String,
    },
    email: {
        required: false,
        // unique: true,
        type: String,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
    status: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });
exports.default = mongoose_1.default.models.user || mongoose_1.default.model("user", userModel);
