const connection = require("../config/db");

module.exports.getAllStudent = (req,res) => {
    const query = "SELECT * FROM STUDENT";
    connection.query(query, (err, rows, fields) => {
        if(err){
            res.status(400).send({
                success: false,
                data: msg
            })
        }

        else{
            res.status(200).send({
                success: true,
                data: rows
            })
        }
    })
}
