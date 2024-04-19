const express = require('express')
const app = express()
require('dotenv').config();
const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

require('./config/mongoose.config')
require('./routes/product.route')(app);

app.listen(process.env.port, () => {
    console.log('SERVER IS RUNNIG ON PORT ', process.env.port);
})