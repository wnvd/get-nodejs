const express = require("express");

const { sendReqParam } = require("./controllers/homeControllers.js");
const app = express();

app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(express.json());
app.use((req, res, next) => {
    console.log(`request made: ${req.url}`);
    next();
});

app.get("/items/:vegetables", sendReqParam);

app.post("/", (req, res) => {
    console.log(req.method);
    console.log(req.body);
    console.log(req.query);
    res.send("Post successful!");
});
app.listen(3000, () => {
    console.log("server is listening at 3000...");
});
