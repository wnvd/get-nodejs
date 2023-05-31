const port = 3000;
const http = require("node:http");

const router = require("./router");
const contentTypes = require("./contentTypes");
const utils = require("./utils");

// creating routes for files
router.get("/", (req, res) => {
    res.writeHead(200, contentTypes.html);
    utils.getFile("views/index.html", res);
});

router.get("/courses.html", (req, res) => {
    res.writeHead(200, contentTypes.html);
    utils.getFile("views/courses.html", res);
});

router.post("/", (req, res) => {
    res.writeHead(200, contentTypes.html);
    utils.getFile("views/thanks.html", res);
});

router.get("/graph.png", (req, res) => {
    res.writeHead(200, contentTypes.png);
    utils.getFile("public/images/graph.png", res);
});

router.get("/people.jpg", (req, res) => {
    res.writeHead(200, contentTypes.jpg);
    utils.getFile("public/images/people.jpg", res);
});

router.get("/product.jpg", (req, res) => {
    res.writeHead(200, contentTypes.jpg);
    utils.getFile("public/images/product.jpg", res);
});

router.get("/bootstrap.css", (req, res) => {
    res.writeHead(200, contentTypes.css);
    utils.getFile("public/css/bootstrap.css", res);
});

router.get("/confetti_cuisine.css", (req, res) => {
    res.writeHead(200, contentTypes.css);
    utils.getFile("public/css/confetti_cuisine.css", res);
});

router.get("/confetti_cuisine.html", (req, res) => {
    res.writeHead(200, contentTypes.jpg);
    utils.getFile("public/js/confetti_cuisine.js", res);
});

http.createServer(router.handle).listen(port, () => {
    console.log(`server is listen on ${port}`);
});
