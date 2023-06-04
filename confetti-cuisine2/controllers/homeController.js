const courses = [
    {
        title: "Event driven Cakes",
        cost: 50
    },
    {
        title: "Asynchronous Aritchoke",
        cost: 40
    },
    {
        title: "Object oriented programming",
        cost: 20
    }
];

exports.showCourses = (req, res) => {
    res.status(200)
        .render("courses", {
            courses: courses
        });
};
exports.showSignUp = (req, res) => {
    res.status(200)
        .render("contact");
};
exports.postedSignUpForm = (req, res) => {
    res.status(200)
        .render("thanks");
};
