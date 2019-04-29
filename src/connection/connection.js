const mysql = require('mysql')

const conn = mysql.createConnection({
    user: 'devuser1234',
    password: 'mike111122',
    host: 'db4free.net',
    database: 'databasejc8',
    port: '3306'
})

module.exports = conn
