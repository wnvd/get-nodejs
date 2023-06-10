const Subscriber = require("../models/Subscriber.js");

exports.home = async (req, res, next) => {
    try {
        res
            .status(200)
            .render('index');
    } catch (e) {
        console.log(e);
    }
};

exports.getSubscribers = async (req, res, next) => {
    try {
        const subscribers = await Subscriber.find({});
        res
            .status(200)
            .render("subscribers", {
                data: subscribers
            });
    } catch (e) {
        console.log(e);
    }
};

exports.getContact = async (req, res, next) => {
    res
        .status(200)
        .render("contacts");
    next();
};
exports.createSubscriber = async (req, res, next) => {
    try {
        const subscriber = req.body;
        await Subscriber.create(subscriber);
        res
            .status(200)
            .redirect("/subscribers");
        next();
    } catch (e) {
        console.log(e);
    }
};
