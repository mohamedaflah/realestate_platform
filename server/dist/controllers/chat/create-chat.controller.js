"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createChatController = void 0;
const chat_model_1 = __importDefault(require("../../models/chat.model"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_model_1 = __importDefault(require("../../models/user.model"));
const createChatController = async (req, res) => {
    try {
        const { firstId, secondId } = req.body;
        let chat = await chat_model_1.default.findOne({
            members: {
                $all: [
                    new mongoose_1.default.Types.ObjectId(firstId),
                    new mongoose_1.default.Types.ObjectId(secondId),
                ],
            },
        });
        if (!chat) {
            chat = new chat_model_1.default({ members: [firstId, secondId] });
            await chat.save();
        }
        const user = await user_model_1.default.findOne({ _id: secondId });
        return res
            .status(201)
            .json({ status: true, message: "Chat created", user, chat });
    }
    catch (error) {
        return res
            .status(500)
            .json({ status: false, message: error.message });
    }
};
exports.createChatController = createChatController;
