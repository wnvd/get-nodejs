const Courses = require("../models/Courses.js");

exports.getCourses = async (req, res, next) => {
    try {
        const result = await Courses.find({}).populate('subscribers', 'name');
        res
            .status(200)
            .json({
                success: true,
                data: result
            });
    } catch (e) {
        console.log(e);
    }
    next();
};

exports.createCourse = async (req, res, next) => {
    try {
        const course = await Courses.create(req.body);
        res
            .status(201)
            .json({
                success: true,
                data: course
            });
    } catch (e) {
        console.log(e);
    }
    next()
};
