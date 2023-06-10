const mongoose = require("mongoose");

const SubscriberSchema = new mongoose.Schema({
    name: String,
    email: String,
    zipCode: Number
});

module.exports = mongoose.model("Subscribers", SubscriberSchema);
