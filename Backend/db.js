const mongoose = require('mongoose');

const mongouri = "mongodb://localhost:27017/iNoteBook";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongouri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        // Optionally handle or log the error further
    }
}

module.exports = connectToMongo;
