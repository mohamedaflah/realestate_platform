"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getChats_1 = require("../controllers/chat/getChats");
const create_chat_controller_1 = require("../controllers/chat/create-chat.controller");
const createmsg_controller_1 = require("../controllers/message/createmsg.controller");
const getAllmessages_1 = require("../controllers/message/getAllmessages");
const chatRouter = (0, express_1.Router)();
chatRouter
    .route("/chat")
    .get(getChats_1.getUserChatsController)
    .post(create_chat_controller_1.createChatController);
chatRouter.route("/message").post(createmsg_controller_1.createMessageController).get(getAllmessages_1.getAllMessagesController);
exports.default = chatRouter;
