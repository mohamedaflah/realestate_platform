"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const propertyModel = new mongoose_1.default.Schema({
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
    userId: mongoose_1.default.Types.ObjectId,
    images: [String],
    status: {
        type: String,
        enum: ["publish", "unpublish"],
        default: "publish",
    },
    featuresAndAminity: [String],
    otherProperty: [String],
}, { timestamps: true });
exports.default = mongoose_1.default.models.property ||
    mongoose_1.default.model("property", propertyModel);
