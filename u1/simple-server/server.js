const port = 3000;
const http = require("node:http");

const app = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html",
    });

    res.write("<h3>Server is created</h3>");
    res.end();
});

app.listen(port, () => {
    console.log("app is listening at 3000");
});
