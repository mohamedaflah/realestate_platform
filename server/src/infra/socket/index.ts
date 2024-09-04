import { Socket } from "socket.io";
import app from "../..";
const socket = require("socket.io");
const io: Socket = socket(app, {
  cors: {
    origin: [String(process.env.CLIENT_ORIGIN)],
    credentials: true,
  },
});
const onlineUsers: { socketId: string; id: string }[] = [];
function checkUserExistStatus(userId: string) {
  return onlineUsers.some((usr) => userId === usr?.id);
}
io.on("connection", (socket: Socket) => {
  socket.on("join-user", ({ id }) => {
    const userExist = checkUserExistStatus(id);
    if (!userExist) {
      onlineUsers.push({ id, socketId: socket.id });
    }
    io.emit("get-online-users", onlineUsers);
  });
});
