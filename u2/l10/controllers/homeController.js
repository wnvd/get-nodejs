exports.respondWithName = (req, res) => {
    const name = req.params.name;
    res.render("index", {
        title: 'pug',
        name: name,
        message: 'using pug template view engine'
    });
};
