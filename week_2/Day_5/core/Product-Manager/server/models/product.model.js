// import mongoose to build the model
const mongoose = require("mongoose")

// The model - the rules the entries need to follow
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, "{PATH} is required"],
        minLength: [3, "{PATH} must be at least 3 characters"],
    },
    price: {
        type: Number,
        trim: true,
        required: [true, "{PATH} is required"],
        minLength: [1, "{PATH} must be at least 1 number"],
    },
    description: {
        type: String,
        trim: true,
        required: [true, "{PATH} is required"],
        minLength: [3, "{PATH} must be at least 3 characters"],
    }
},
    { timestamps: true });

module.exports = mongoose.model ("Product", ProductSchema);