// Import our Mongoose
const mongoose = require("mongoose")

// the module - the rules the entries need to follow

const AuthorsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "{PATH} is required !"],
        minlength:[3, '{PATH} length must be at least 3 🚫']
    }
}, { timestamps: true })

const Authors = mongoose.model("Authors", AuthorsSchema)

module.exports = Authors