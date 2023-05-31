const port = 3000;
const http = require("node:http");

// route map 
const routeMap = {
    "/info": "<h1>information page</h1>",
    "/contactus": "<h1>contact us</h1>",
};
const app = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    if (routeMap[req.url]) {
        res.end(routeMap[req.url]);
    } else {
        res.end("<h1>welcome</h1>");
    }
});

app.listen(port, () => {
    console.log('listening at 3000');
});
