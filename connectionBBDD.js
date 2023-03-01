const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'jJ15983328',
    database: 'users',
    port: 3306
})

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('connection BBDD successfully');
    }
})


module.exports = connection