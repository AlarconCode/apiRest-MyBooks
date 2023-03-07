const connection = require('../connectionBBDD')

// Añadir usuarios

const postUser = (req, res) => {

    let response = {error: true, code:500, result: []}

    const {name, surname, email, photo, password} = req.body

    let params = [name, surname, email, photo, password]

    let sql = `INSERT INTO user (name, surname, email, photo, password) VALUES (?, ?, ?, ?, ?);`

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

const postLogin = (req, res) => {

    let response = {error: true, code:500, result: []}

    const {email, password} = req.body

    let params = [email, password]

    let sql = `SELECT id_user, name, surname, email, photo FROM user WHERE email = ? AND password = ?`

    connection.query(sql, params, (err, result) => {

        if(err) {
            console.log(err);
        } else {
            console.log(result);
            if(result.length == 0) {
                response.error = true
                response.code = 404,
                response.result = 'Los datos no existen'
            } else {
                response.error = false
                response.code = 200,
                response.result = result
            }
            res.send(response)
        }

    })

}

module.exports = {postUser, postLogin}