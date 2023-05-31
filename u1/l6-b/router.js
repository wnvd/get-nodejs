const htmlContentType = {
    "Content-Type": "text/html"
};

const routes = {
    "GET": {
        "/info": (req, res) => {
            res.writeHead(200, {
                "Content-Type": "text/plain"
            });
            res.end("Welcome to the  info Page!");
        },
        // "/index": (req, res) => {
        //     res.writeHead(200, htmlContentType);
        //     res.end("index");
        // }
    },
    "POST": {}
};

exports.handle = (req, res) => {
    try {
        if (routes[req.method][req.url]) {
            // e.g GET -> Info: function
            routes[req.method][req.url](req, res);
        } else {
            res.writeHead(404, htmlContentType);
            res.end("<h1>No such file</h1>");
        }
    } catch (ex) {
        console.log("error" + ex);
    }
};

exports.get = (url, action) => {
    routes["GET"][url] = action;
};

exports.post = (url, action) => {
    routes["POST"][url] = action;
};
