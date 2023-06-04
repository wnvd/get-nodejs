const { showCourses, showSignUp, postedSignUpForm } = require("./controllers/homeController.js");
const { pageNotFoundError, internalServerError } = require("./controllers/errorHandler.js");
const express = require("express");

const app = express();
app.set("port", process.env.PORT || 3000);
app.set("view engine", "pug");

app.use(express.urlencoded({
    extended: false,
}));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/courses", showCourses);
app.get("/contact", showSignUp);
app.post("/contact", postedSignUpForm);

app.use(internalServerError);
app.use(pageNotFoundError);

app.listen(app.get("port"), () => {
    console.log('server is running at port 3000');
});
