const mongoose = require('mongoose');

const mongouri = "mongodb://localhost:27017/";

const connecttomongo = async () => {
    try {
        await mongoose.connect(mongouri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
}

module.exports = connecttomongo;
