const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    items: [],
    zipCode: {
        type: Number,
        min: [10000, "Zip code to short"],
        max: 99999
    },
    subscribers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subscribers"
    }]
});

module.exports = mongoose.model("Courses", courseSchema);
