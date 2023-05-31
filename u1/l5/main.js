const port = 3000;
const http = require("node:http");

const app = http.createServer();

app.on("request", (req, res) => {
    console.log(req.params, req.method, req.url);

    res.writeHead(200, {
        "Content-Type": "text/html"
    });
   
    let body = [];
    req.on("data", (bodyData) => {
        console.log(bodyData);
        body.push(bodyData);    
    });

    req.on("end", () => {
        body = Buffer.concat(body).toString();
        console.log(body);
    });

    res.end('req processed.');
});

app.listen(port, () => {
    console.log(`server is listenging at ${port}`);
});
