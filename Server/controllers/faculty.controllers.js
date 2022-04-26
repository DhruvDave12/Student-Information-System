const connection = require("../config/db");

module.exports.getAllFaculties = (req,res) => {
    const query = "SELECT * FROM faculty";

    connection.query(query, (err,rows,fields) => {
        if(rows){
            res.status(200).send({
                success: true,
                data: rows
            })
        }
        res.status(403).send({
            success: false,
            msg: "No faculty exists"
        })
    })
}


module.exports.getParticularFaculty = (req,res) => {
    const { id } = req.params;
    
    const query = "SELECT * FROM faculty where faculty_id = ?";
    connection.query(query, [id], (err,rows,fields) => {
        if(rows) {
            res.status(200).send({
                success: true,
                data: rows
            })
        }
        res.status(403).send({
            success: false,
            msg: "No faculty found. Please enter correct ID"
        })
    })
}

module.exports.deleteAStudent = (req,res) => {
    const { id } = req.params;

    const query = "DELETE FROM student where student_id = ?";

    connection.query(query, [id], (err,rows,fields) => {
        if(rows){
            res.status(200).send({
                success: true,
                msg: "User successfully deleted"
            })
        }
        else{
            res.status(403).send({
                success: false,
                msg: "Error while deleting a user"
            })
        }
    })
}