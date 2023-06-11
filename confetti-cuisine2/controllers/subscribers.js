const Subscriber = require("../models/subscribers.js");

exports.createSubscriber = async (req, res, next) => {
    try {
        let subscriber = req.body;
        await Subscriber.create(subscriber);

        res
            .status(200)
            .redirect("/subscribers");
        next();
    } catch (e) {
        console.log(e.message);
    }
};

exports.getSubscribers = async (req, res, next) => {
    try {
        const subscribers = await Subscriber.find({});
        res
            .status(200)
            .render("subscribers", {
                data : subscribers
            });
    } catch (e) {
        console.log(e.message);
    }
    next();
};
