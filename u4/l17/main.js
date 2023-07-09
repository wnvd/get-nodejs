const express = require("express");

const connect_db = require("./utils/db.js");
const errorHandler = require("./middleware/errorHandler.js");

const { getSubscribers, 
        createSubscribers, 
        addCourse } = require("./controllers/subscribers.js");
const { getCourses, createCourse } = require("./controllers/courses.js");

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

connect_db();

app.get("/subscribers", getSubscribers);
app.post("/subscribers", createSubscribers);
app.post("/addCourse", addCourse);

app.get("/courses", getCourses);
app.post("/courses", createCourse);

app.use(errorHandler);

const server = app.listen(3000, () => {
    console.log('server is listening at 3000');
});

process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`);

    server.close(() => process.exit(1));
});
