const fs = require("node:fs");
const contentTypes = require("./contentTypes.js");

module.exports = {
    getFile: (file_path, res) => {
        if (fs.existsSync(file_path)) {
            fs.readFile(`./${file_path}`, (error, data) => {
                if (error) {
                    res.writeHead(200, contentTypes.html);    
                    res.end("<h1>404 Not Found</h1>");
                }
                res.end(data);
            });
        } else {
            res.writeHead(200, contentTypes.html);    
            res.write("<h1>File Not Found</h1>");
        }
    },
};
