const Subscribers = require("../models/Subscribers.js");

exports.getSubscribers = async (req, res, next) => {
    const result = await Subscribers.find({}).populate("courses", "title");

    res
        .status(200)
        .json({
            data: result
        });
    next();
};

exports.createSubscribers = async (req, res, next) => {

    try {
        const user = await Subscribers.create(req.body);
        res
            .status(201)
            .json({
                success: true,
                data: user
            });
    } catch (e) {
        console.log(e);
    }
    next();
};

exports.addCourse = async (req, res, next) => {
    try {
        // params
        const filter = req.body.subscriberId;
        const update = { $push: { courses: req.body.courseId } };

        const subscriber = await Subscribers.findByIdAndUpdate(filter, update);
        res.json({
            data: subscriber
        });

    } catch (e) {
        console.log(e);
    }
    next();
};
