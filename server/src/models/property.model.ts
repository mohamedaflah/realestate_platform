import mongoose, { mongo } from "mongoose";

const propertyModel = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    propertyType: {
      type: String,
      enum: ["residential", "commercial", "land", "luxury"],
    },
    listingType: {
      type: String,
      enum: ["rent", "lease", "buy"],
    },
    price: {
      type: Number,
    },
    address: {
      city: String,
      state: String,
      zipcode: String,
      country: String,
    },
    description: String,
    areaSize: Number,
    numberofBedrooms: Number,
    numberofParkingSpace: Number,
    founded: Number,
    totalFloor: Number,
    userId: mongoose.Types.ObjectId,
    images: [String],
    status: {
      type: String,
      enum: ["publish", "unpublish"],
    },
    featuresAndAminity: [String],
    otherProperty: [String],
  },
  { timestamps: true }
);

export default mongoose.models.property ||
  mongoose.model("property", propertyModel);
