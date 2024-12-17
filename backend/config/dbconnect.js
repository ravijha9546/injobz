const mongoose = require("mongoose");

const connectdb = async() => {
    await mongoose.connect(
        "mongodb+srv://ravijhasatghara2:root@cluster0.bglxi.mongodb.net/injob"
    );
};
module.exports = connectdb;


