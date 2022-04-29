const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database: "studentinfosys",
    user: "root",
    password: "dhruvd1201",
    multipleStatements: true
})

module.exports = connection;