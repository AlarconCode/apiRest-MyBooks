const express = require('express')
const { getBooksByID, postBook, deleteBook } = require('../controller/book-controller')


const bookRouter = express.Router()

bookRouter.get('/books', getBooksByID )
bookRouter.post('/books', postBook )
bookRouter.delete('/books', deleteBook)

module.exports = bookRouter