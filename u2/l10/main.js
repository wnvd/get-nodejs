const { respondWithName } = require("./controllers/homeController.js")
const express = require("express");
const app = express();

app.set("view engine", "pug");


// route to index.pug
app.get("/name/:name", respondWithName)

app.listen(3000, () => {
    console.log("server is listening at port 3000");
});
