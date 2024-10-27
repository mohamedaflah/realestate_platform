"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
require("dotenv/config");
require("./infra/socket/index");
const cors_1 = __importDefault(require("cors"));
require("./config/mongo.config");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const user_router_1 = __importDefault(require("./routes/user.router"));
const property_route_1 = __importDefault(require("./routes/property.route"));
const index_1 = __importDefault(require("./infra/socket/index"));
const chatandMessage_1 = __importDefault(require("./routes/chatandMessage"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: process.env.CLIENT_ORIGIN, credentials: true }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use("/api/user", user_router_1.default);
app.use("/api/property", property_route_1.default);
app.use("/api/chat", chatandMessage_1.default);
const server = (0, http_1.createServer)(app);
(0, index_1.default)(server);
server.listen(4000, () => {
    console.log("Server running on port 4000");
});
exports.default = app;
