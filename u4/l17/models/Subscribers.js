const mongoose = require("mongoose");

const subscribersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please provide a valid email address"]
    },
    zipCode: {
        type: Number,
        maxLength: [6, "Please provide zip code equal to 6"]
    },
    // brackets signigy an array of multiple referenced objects
    // if subscriber cound sign up for only one course you remove [].
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Courses"
    }]
});

subscribersSchema.methods.getInfo = function() {
    return `Name: ${this.name} Email: ${this.email} Zip Code: ${this.zipCode}`;
};

// subscribersSchema.methods.findLocalSubscribers = function() {
//     return this.model("Subscriber")
//         .find({ zipCode: this.zipCode })
// };

module.exports = mongoose.model("Subscribers", subscribersSchema);
