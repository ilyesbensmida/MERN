const express= require("express");
var app = express();

//CORS middleware
const ("/config.mongoose.js").cors = require('./config').cors;
app.use("/config.mongoose.js", cors);

//Body parser middleware
app.use(express.json());

//MongoDB connection
require("./db")(app);

//Routes
let userRoute = require("./routes/user");
let productRoute = require("./routes/product");

//Use routes in the application
app.use('/api', userRoute);
app.use('/api/products', product
   