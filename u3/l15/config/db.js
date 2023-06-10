const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        const con = await mongoose.connect("mongodb://localhost:27017/recipe_db");
        console.log(`MongoDB connected: ${con.connection.name}`);
    } catch (e) {
        console.log(e);
    }
};

module.exports = connectDB;
