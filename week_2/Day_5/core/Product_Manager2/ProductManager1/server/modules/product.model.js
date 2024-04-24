// Import our Mongoose
const mongoose = require("mongoose")

// the module - the rules the entries need to follow

const ProductSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: [true, "{PATH} is required"],
        minLength: [3, "{PATH} must have at least 3 chars"]
    },
    price: {
        type: Number,
        required: true
    },
    description: {
      type: String,
      required: [true, "{PATH} is required"],
      minLength: [20,"{PATH} must have at least 20 chars"]
  }
}, { timestamps: true })

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product