"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const chatModel = new mongoose_1.default.Schema({
    members: [mongoose_1.default.Types.ObjectId],
    propertyId: mongoose_1.default.Types.ObjectId,
}, { timestamps: true });
exports.default = mongoose_1.default.models.chats || mongoose_1.default.model("chats", chatModel);
