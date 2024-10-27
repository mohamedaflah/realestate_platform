"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMessageController = void 0;
const message_model_1 = __importDefault(require("../../models/message.model"));
const createMessageController = async (req, res) => {
    try {
        const { body } = req;
        const msg = new message_model_1.default(body);
        await msg.save();
        return res.status(200).json({ status: true, message: "Successful", msg });
    }
    catch (error) {
        return res
            .status(500)
            .json({ status: false, message: error.message });
    }
};
exports.createMessageController = createMessageController;
