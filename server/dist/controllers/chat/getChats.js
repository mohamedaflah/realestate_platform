"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserChatsController = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const chat_model_1 = __importDefault(require("../../models/chat.model"));
const user_model_1 = __importDefault(require("../../models/user.model"));
const getUserChatsController = async (req, res) => {
    try {
        let { userId } = req.query;
        userId = String(userId);
        const chats = await chat_model_1.default.aggregate([
            {
                $match: {
                    members: new mongoose_1.default.Types.ObjectId(userId),
                },
            },
            {
                $unwind: "$members",
            },
            {
                $match: {
                    members: { $ne: new mongoose_1.default.Types.ObjectId(userId) }, // Exclude the user's own details
                },
            },
            {
                $lookup: {
                    from: user_model_1.default.collection.name,
                    localField: "members",
                    foreignField: "_id",
                    as: "opponentDetails",
                },
            },
            {
                $unwind: "$opponentDetails",
            },
            {
                $group: {
                    _id: "$_id",
                    propertyId: { $first: "$propertyId" },
                    opponentDetails: { $push: "$opponentDetails" },
                    createdAt: { $first: "$createdAt" },
                    updatedAt: { $first: "$updatedAt" },
                },
            },
            {
                $project: {
                    _id: true,
                    createdAt: false,
                    updatedAt: false,
                    propertyId: false,
                },
            },
            {
                $unwind: "$opponentDetails",
            },
        ]);
        const users = chats.map((ch) => ({
            ...ch.opponentDetails,
            chatId: ch._id,
        }));
        console.log(chats);
        return res
            .status(200)
            .json({ status: true, message: "Chats fetched", chats: users });
    }
    catch (error) {
        return res
            .status(500)
            .json({ status: false, message: error.message });
    }
};
exports.getUserChatsController = getUserChatsController;
