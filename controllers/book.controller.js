// this file also known as waiter in the hotel
// this file will have all the logic

// Hnadler for create a new category request
const { book } = require("../models");
const db = require("../models");
const Book = db.book;


exports.addBook = (req, res) => {

    if (!req.body.title) {
        res.status(400).send({
            message: "title of the book can't be empty !"
        })
        return;
    }
    // fetching try to create the category Object
    const book = {
        title: req.body.title,
        author: req.body.author,
        releasedate: req.body.releasedate,
        publisher: req.body.publisher
    }



    // store this in db
    Book.create(book).then(book => {
        console.log(`book.title :[ ${book.title}]got insserted in db`);
        res.status(201).send(book);
    }).catch(err => {
        console.log(`issue in inserting the book title : [${book.title}]. Error message:[${err.message}]`);
        res.status(500).send({
            message: "Some Internal error while storing the book!"

        })
    }

    )
}


// get all list of book 
exports.getAllBooks = (req, res) => {

    //Supporting the query param
    let bookTitle = req.query.title;
    let promise;
    if (bookTitle) {
        promise = Book.getAllBooks({
            where: {
                title: bookTitle,
                author: bookAuthor,
                releasedate: bookreleaseDate,
                publisher: bookPublisher
            }
        });
    } else {
        promise = Book.findAll();
    }
    promise.then(books => {
        res.status(200).send(books);
    }).catch(err => {
        res.status(500).send({
            message: "Some Internal error while fetching all the books"
        })
    })
}

// //get book by title 
exports.findAll = (req, res) => {
    let bookTitle = req.query.title;
    let promise;
    if (bookTitle) {
        promise = Book.findAll({
            where: {
                title: bookTitle

            }
        });
    } else {
        promise = Book.findAll();
    }
    promise.then(books => {
        res.status(200).send(books);
    }).catch(err => {
        res.status(500).send({
            message: "Some Internal error while fetching all the books"
        })
    })
}


//get publisher .....

exports.findAll = (req, res) => {
    let bookPublisher = req.query.publisher;
    let promise;
    if (bookPublisher) {
        promise = Book.findAll({
            where: {
                title: bookPublisher

            }
        });
    } else {
        promise = Book.findAll();
    }
    promise.then(books => {
        res.status(200).send(books);
    }).catch(err => {
        res.status(500).send({
            message: "Some Internal error while fetching all the books"
        })
    })
}

















// get by book id 
exports.GetBookById = (req, res) => {
    const bookId = req.params.id;
    Book.findByPk(bookId).then(book => {
        res.status(200).send(book);
    }).catch(err => {
        res.status(500).send({
            message: "Some Internal error while fetching all the books"
        })
    })

}

// update by book id 

// /**
//   * Update an existing product
//   */
exports.UpdateBookById = (req, res) => {

    //  * Validation of the request body


    if (!req.body.title) {
        res.status(400).send({
            message: "title of the book can't be empty !"
        })
        return;
    }

    const book = {
        title: req.body.title,
        author: req.body.author,
        releasedate: req.body.releasedate,
        publisher: req.body.publisher
    }

    const bookId = req.params.id;
    Book.update(book, {
        returning: true,
        where: { id: bookId }
    }).then(updatedBook => {

        Book.findByPk(bookId).then(book => {
            res.status(200).send(book);
        }).catch(err => {
            res.status(500).send({
                message: "Some Internal error while fetching the book based on the id"
            })
        })
    }).catch(err => {
        res.status(500).send({
            message: "Some Internal error while fetching the book based on the id"
        })
    })
}
// /**
// //   * Delete an existing product based on the book title
// //   */
exports.DeleteBookById = (req, res) => {
    const book = {
        title: req.body.title,
        author: req.body.author,
        releasedate: req.body.releasedate,
        publisher: req.body.publisher
    }

    const bookId = req.params.id;

    Book.destroy({
        where: {
            id: bookId
        }
    }).then(result => {
        res.status(200).send(
            {
                message: "Successfully deleted the book"
            }
        );
    }).catch(err => {
        res.status(500).send({
            message: "Some Internal error while deleting the book based on the id"
        })
    })
}




