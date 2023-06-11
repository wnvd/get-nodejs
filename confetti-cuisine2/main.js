const { showCourses, showSignUp, postedSignUpForm } = require("./controllers/homeController.js");
const { pageNotFoundError, internalServerError } = require("./controllers/errorHandler.js");
const { createSubscriber, getSubscribers } = require("./controllers/subscribers.js");
const express = require("express");
const connectDB = require("./config/db.js");

const app = express();
app.set("port", process.env.PORT || 3000);
app.set("view engine", "pug");

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

// connecting to database
connectDB();

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/courses", showCourses);
app.get("/contact", showSignUp);
app.get("/subscribers", getSubscribers);
app.post("/contact", createSubscriber);

app.use(internalServerError);
app.use(pageNotFoundError);

app.listen(app.get("port"), () => {
    console.log('server is running at port 3000');
});
