const mongoose = require("mongoose");

const SubscribersSchema = new mongoose.Schema({
    name: String,
    email: String,
    zipCode: Number
});

module.exports = mongoose.model("Subscribers", SubscribersSchema);
