const { logErrors, respondInternalError, respondNoResourceFound } = require("./controllers/errorController.js");
const express = require("express");

const app = express();

app.use(express.static("public"))

app.use(logErrors);
// app.use(respondNoResourceFound);
app.use(respondInternalError);

app.get("/name/:name", (req, res) => {
    const name = req.params.name;
    res.status(200);
    res.send(`<h1>hello ${name}</h1>`);
});

app.listen(3000, () => {
    console.log('server is running at 3000');
});
