import express, { Application } from "express";
import { createServer } from "http";  // Import createServer from http module
import "dotenv/config";
import './infra/socket/index'; // Ensure this is imported after the HTTP server is created
import cors from "cors";
import "./config/mongo.config";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.router";
import propertyRoute from "./routes/property.route";
import serverInstance from './infra/socket/index'
const app: Application = express();

// Middleware configuration
app.use(cors({ origin: process.env.CLIENT_ORIGIN, credentials: true }));
app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/api/user", userRouter);
app.use("/api/property", propertyRoute);

// Create the HTTP server
const server = createServer(app);

// Import socket after server creation
serverInstance(server);  // Pass the server instance to socket

// Start the server
server.listen(4000, () => {
  console.log("Server running on port 4000");
});

export default app;
