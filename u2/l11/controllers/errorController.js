exports.logErrors = (err, req, res, next) => {
    console.log('error stack:');
    console.log(err.stack);
    res.status(500).send('something broke!');
};

exports.respondNoResourceFound = (req, res) => {
    res.status(404);
    res.sendFile(`./public/${404}.html`,{
        root: './'
    });
};

exports.respondInternalError = (error, req, res, next) => {
    console.log(`Error occurred: ${error.stack}`);
    res.status(500);
    res.send(`500 | Sorry, our application is experiencing a problem`);
};
