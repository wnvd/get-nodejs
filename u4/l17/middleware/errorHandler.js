const ErrorResponse = require("../utils/ErrorResponse.js");

const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message;

    console.log(err);

    if (err.name === "CastError") {
        const message = `Resourse not found!`;
        error = new ErrorResponse(message, 400);
    }
    if (err.name === "11000") {
        const message = `Duplicate field value entered`;
        error = new ErrorResponse(message, 400);
    }
    if (err.name === "ValidationError") {
        const message = `Resourse not found!`;
        error = new ErrorResponse(message, 400);
    }

    res.status(error.statusCode || 500).json({
        success: true,
        error: error.message || "Server Error",
    });
    next();
};

module.exports = errorHandler;
