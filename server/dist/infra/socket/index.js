"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
exports.default = (server) => {
    const io = new socket_io_1.Server(server, {
        cors: {
            origin: [String(process.env.CLIENT_ORIGIN)],
            credentials: true,
        },
    });
    const onlineUsers = [];
    function checkUserExistStatus(userId) {
        if (!userId || userId == "null" || userId == "undefined") {
            return null;
        }
        return onlineUsers.some((usr) => userId === usr?.id);
    }
    io.on("connection", (socket) => {
        socket.on("join-user", ({ id }) => {
            const userExist = checkUserExistStatus(id);
            if (!userExist) {
                onlineUsers.push({ id, socketId: socket.id });
            }
            io.emit("get-online-users", onlineUsers);
            console.log("User connected:", onlineUsers);
        });
        socket.on("block-user", ({ id }) => {
            const userExist = checkUserExistStatus(id);
            if (userExist) {
                const user = onlineUsers.find((user) => user.id === id);
                socket
                    .to(user?.socketId)
                    .emit("blocked", { message: "Your access has been denied by admin" });
            }
        });
        socket.on("disconnect", () => {
            console.log("User disconnected:", socket.id);
            // Remove the disconnected user from onlineUsers
            const index = onlineUsers.findIndex((user) => user.socketId === socket.id);
            if (index !== -1) {
                onlineUsers.splice(index, 1);
                io.emit("get-online-users", onlineUsers);
                console.log('_______________________________Msg_____________________EMi');
            }
        });
        socket.on("send-message", (message) => {
            const useExist = checkUserExistStatus(message.receiverId);
            if (useExist) {
                const user = onlineUsers.find((user) => user.id === message.receiverId);
                socket.to(user?.socketId).emit("send-msg", message);
            }
        });
    });
};
// export interface IMessage {
//   _id?: string;
//   chatId: string;
//   senderId: string;
//   receiverId: string;
//   content: {
//     type: "image" | "video" | "audio" | "text";
//     isReply: boolean;
//     content: string;
//   };
//   status: "read" | "unread";
//   repliedMessage?: string;
//   createdAt?: Date;
//   updatedAt?: Date;
// }
