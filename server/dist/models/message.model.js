"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const messageModel = new mongoose_1.default.Schema({
    chatId: mongoose_1.default.Types.ObjectId,
    senderId: mongoose_1.default.Types.ObjectId,
    receiverId: mongoose_1.default.Types.ObjectId,
    content: {
        type: {
            type: String,
            enum: ["image", "video", "audio", "text"],
        },
        content: String,
        isReply: Boolean,
    },
    status: {
        type: String,
        enum: ["read", "unread"],
    },
    repliedMessage: mongoose_1.default.Types.ObjectId,
}, { timestamps: true });
exports.default = mongoose_1.default.models.messages ||
    mongoose_1.default.model("messages", messageModel);
