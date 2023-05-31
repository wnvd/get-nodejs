// this is same but has a dynamic routing
const port = 3000;
const http = require("node:http");
const fs = require("node:fs");

const getViewUrl = (url) => {
    return `./views/${url}.html`;
};

const app = http.createServer((req, res) => {
    let viewURL = getViewUrl(req.url);

    fs.readFile(viewURL, (error, data) => {
        if (error) {
            res.write("<h1>404 not found</h1>");
        } else {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.write(data);
        } 
        res.end();
    });
});

app.listen(port, () => {
    console.log("listen at port: 3000");
});
