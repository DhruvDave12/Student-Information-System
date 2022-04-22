const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'localhost',
    port: 3306,
    database: 'studentinfosys',
    user: 'root', 
    password: 'dhruvd1201'
});


connection.connect(function (err) {
    if(err){
        console.log("Error in connecting the database", err);
    }
    else{
        console.log("Database Connected Successfully");
    }
 });

 module.exports = connection;