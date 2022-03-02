// request to validate the middleware for book api
const Book = require("../models/book.model");

const validateBookRequest = (req, res, next) => {
    /**
    * Validation of the request body
    */
    if (!req.body.title) {
        res.status(400).send({
            message: "Title of the book can't be empty !"
        })
        return;
    }
    next();
}
module.exports = { validateBookRequest }