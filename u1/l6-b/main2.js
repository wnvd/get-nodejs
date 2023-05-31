const port = 3000;
const http = require("node:http");
const fs = require("node:fs");

const router = require("./router.js");

const plainTextContentType = {
    "Content-Type": "text/plain"
};
const htmlContentType = {
    "Content-Type": "text/html"
};

// read file
const customReadFile = (file_path, res) => {
    if (fs.existsSync(file_path)) {
        fs.readFile(file_path, (error, data) => {
            if (error) {
                console.log("error reading file..", error);
                return;
            }
            res.write(data);
            res.end();
        });
    }
    console.log('after if');
};

router.get("/", (req, res) => {
    res.writeHead(200, plainTextContentType);
    res.end("index page.. kinda");
});

router.get("/index.html", (req, res) => {
    res.writeHead(200, htmlContentType);
    customReadFile("./views/index.html", res);
});

router.post("/", (req, res) => {
    res.writeHead(200, htmlContentType);
    res.end("posted");
});

http.createServer(router.handle).listen(port, () => {
    console.log("listen at port...");
});
