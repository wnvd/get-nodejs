exports.pageNotFoundError = (req, res) => {
    res.status(404)
        .render("error");
};

exports.internalServerError = (error, req, res, next) => {
    res.status(500)
        .send("500 | Internal Server is errro");
};
