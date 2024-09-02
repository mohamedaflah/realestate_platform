import mongoose from "mongoose";

const userModel = new mongoose.Schema(
  {
    username: String,
    phoneNumber: {
      type: String,
      required: true,
      // unique: true,
    },
    password: {
      required: true,
      type: String,
    },
    email: {
      required: false,
      // unique: true,
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.user || mongoose.model("user", userModel);
