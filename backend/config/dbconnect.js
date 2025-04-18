require('dotenv').config();
const mongoose = require("mongoose");

const connectdb=async()=>{
    await mongoose.connect(
        process.env.MONGO_URI,
    );
};
module.exports = connectdb;


