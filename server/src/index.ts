import express, { Application } from "express";
const app: Application = express();
import "dotenv/config";
import cors from "cors";
import "./config/mongo.config";
import cookieParser from "cookie-parser";
app.use(cors({ origin: process.env.CLIENT_ORIGIN, credentials: true }));
app.use(cookieParser());

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
export default app;
