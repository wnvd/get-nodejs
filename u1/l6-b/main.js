const http = require("node:http");
const fs = require("node:fs");

// error handing function
const sendErrorResponse = res => {
    res.writeHead(404, {
        "Content-Type": "text/html"
    });
    res.write("<h1>File not found!</h1>");
    res.end();
};

const app = http.createServer((req, res) => {
    let url = req.url;

    if (url.indexOf(".html") !== -1) {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        customReadFile(`./views/${url}`, res);
    } else if (url.indexOf(".js") !== -1) {
        res.writeHead(200, {
            "Content-Type": "text/javascript"
        });

        customReadFile(`./public/js/${url}`, res);
    } else if (url.indexOf(".css") !== -1) {
        res.writeHead(200, {
            "Content-Type" : "text/css"
        });

        customReadFile(`./public/css/${url}`, res);
    } else if (url.indexOf(".png") !== -1) {
        res.writeHead(200, {
            "Content-Type" : "images/png"
        });

        customReadFile(`./public/images/${url}`, res);
    }
});

app.listen(3000, () => {
    console.log("server is listen at 3000");
});

// custom file read function
const customReadFile = (file_path, res) => {
    if (fs.existsSync(file_path)) {
        fs.readFile(file_path, (error, data) => {
            if (error) {
                console.log(error);
                sendErrorResponse(res);
                return;
            }
            res.write(data);
            res.end();
        });
    } else {
        sendErrorResponse(res);
    }
};
