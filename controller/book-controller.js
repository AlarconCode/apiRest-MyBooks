const connection = require('../connectionBBDD')

const getBooksByID = (req, res) => {

    const {id_user, id_book} = req.query

    let response = {error: true, code:500, result: []}

    let params = [id_user, id_book]

    let sql = ``
    if (id_user && !id_book) {
        sql = `SELECT * FROM book WHERE id_user = ?`
    } else {
        sql = `SELECT id_book, id_user, title, author, price, photo FROM book WHERE id_user = ? AND id_book = ?`
    }

    connection.query(sql, params, (err, result) => {

        if (err) {
            console.log(err);
            res.send(response)
        } else {
            console.log(result);
            response.error = false
            response.code = 200,
            response.result = result
            res.send(response)
        }

    })

}

const postBook = (req, res) => {

    const {id_user, title, author, price, photo} = req.body

    let response = {error: true, code:500, result: []}
    
    let params = [id_user, title, author, price, photo]

    let sql = `INSERT INTO book (id_user, title, author, price, photo) VALUES (?, ?, ?, ?, ?)`

    connection.query(sql, params, (err, result) => {

        if(err) {
            console.log(err);
            res.send(response)
        } else {
            console.log(result);
            response.error = false
            response.code = 200,
            response.result = result
            res.send(response)
        }

    })

}

const deleteBook = (req, res) => {

    const {id_book} = req.body

    let response = {error: true, code:500, result: []}

    let params = [id_book]

    let sql = `DELETE FROM book WHERE id_book = ?`

    connection.query(sql, params, (err, result) => {

        if(err) {
            console.log(err);
            res.send(response)
        } else {
            console.log(result);
            response.error = false
            response.code = 200,
            response.result = result
            res.send(response)
        }

    })


}

module.exports = {getBooksByID, postBook, deleteBook}