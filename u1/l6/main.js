const port = 3000;
const http = require("node:http");
const fs = require("node:fs");

const routeMap = {
    "/" : "./views/index.html" 
};

const app = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    if(routeMap[req.url]) {
        fs.readFile(routeMap[req.url], (err, data) => {
            res.write(data);
            res.end();
        });
    } else {
        res.end("<h1>Sorry! not found.</h1>");
    }
});

app.listen(port, () => {
    console.log(`listen at port:${port}`);
});
