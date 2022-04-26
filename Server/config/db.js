const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database: "studentinfosys",
    user: "root",
    password: "Akshat123@#"
})

module.exports = connection;