const mongoose = require('mongoose');
const Subscriber = require("./models/subscriberSchema.js");

async function con_db() {
    const con = await mongoose.connect('mongodb://localhost:27017/recipe_db');
    console.log(`MongoDB Connected: ${con.connection.host}`);
}

const testObj = {
    "name": "Naveed",
    "email": "nav@gmail.com",
    "zipCode": 19213
};

async function addOne(subscriber) {
    try {
        const res = await Subscriber.create(subscriber);
        console.log(res);
    } catch (e) {
        console.log(e);
    }
}

async function deleteEveryThing(name) {
    try {
        await Subscriber.deleteMany({ name: name });
    } catch (e) {
        console.log(e);
    }
}

con_db();
addOne(testObj);
// deleteEveryThing('Naveed');
