"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default
    .connect(String(process.env.MONGODB_URI), { dbName: "estate" })
    .then(() => {
    console.log(`Mongodb connected`);
})
    .catch((er) => {
    console.log(`Mongodb err ${er}`);
});
