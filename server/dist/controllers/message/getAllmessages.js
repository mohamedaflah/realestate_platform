"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMessagesController = void 0;
const message_model_1 = __importDefault(require("../../models/message.model"));
const getAllMessagesController = async (req, res) => {
    try {
        const { chatId } = req.query;
        const messages = await message_model_1.default.find({ chatId: chatId });
        return res.status(200).json({ status: true, messages, message: "Success" });
    }
    catch (error) {
        return res
            .status(500)
            .json({ status: false, message: error.message });
    }
};
exports.getAllMessagesController = getAllMessagesController;
