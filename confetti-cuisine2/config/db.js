const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/confetti_cuisine_db");
        console.log(`Mongodb connected: ${conn.connection.name}`);
    } catch (e) {
        console.log(e);
    }
};

module.exports = connectDB;
