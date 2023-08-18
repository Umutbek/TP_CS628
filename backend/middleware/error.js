const ErrorResponse = require("../utils/errorResponse");
const errorHandler = (err, req, res, next) => {
    let error = {...err};
    error.message = err.message;
    if(err.name === "CastError"){
        const message = 'Resource Not FOund ${err.value}';
        error = new ErrorResponse(message, 404);

    }

    //Mongoose duplicate value
    if(err.code === 11000){
        const message = 'Duplicate value entered ${err.value}';
        error = new ErrorResponse(message, 404);
        
    }
     //Mongoose validation error
     if(err.name === "ValidationError"){
        const message = Object.values(err.errors).map(val => '' + val.message);

        error = new ErrorResponse(message, 404);
        
    }

    res.status(error.statusCode || 500).json({
        success: false,
        errro: error.message || "Server Error"
    })
}

module.exports = errorHandler;