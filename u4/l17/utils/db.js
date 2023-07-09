const mongoose = require("mongoose");

async function connect_db() {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/recipe_db");
        console.log(`Connectin to DB ${conn.connection.name} estb.`);
    } catch (e) {
        console.log(e.message);
    }
};

module.exports = connect_db;
