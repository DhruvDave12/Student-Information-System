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
        else {
            res.status(403).send({
                success: false,
                msg: "No faculty exists"
            })
        }
    })
}


module.exports.getParticularFaculty = (req,res) => {
    const { id } = req.params;

    const query = `SELECT * FROM faculty where faculty_id = ${id}`;
    connection.query(query, (err,rows,fields) => {
        if(rows) {
            res.status(200).send({
                success: true,
                data: rows
            })
        }
        else{
            res.status(403).send({
                success: false,
                msg: "No faculty found. Please enter correct ID"
            })
        }
    })
}

module.exports.deleteAStudent = (req,res) => {
    const { id } = req.params;

    const query = "DELETE FROM academics where student_id = ?; DELETE FROM curricular where student_id = ?; DELETE FROM internship where student_id = ?; DELETE FROM student where student_id = ?;";

    connection.query(query, [id, id, id, id], (err,rows,fields) => {
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

module.exports.postExtraData = (req,res) => {
    const {first_name, middle_name, last_name, faculty_id, contact, email} = req.body;

    const facData = {
        first_name,
        middle_name,
        last_name,
        faculty_id, 
        contact,
        email
    }
    const query = 'INSERT INTO FACULTY (faculty_id, first_name, middle_name, last_name, email, contact) values (?, ?, ?, ?, ?, ?)';
    connection.query(query, [faculty_id, first_name, middle_name, last_name, email, contact], (err,rows,fields) => {
        if(rows){
            res.status(200).send({
                success: true,
                data: facData
            })
        }
        else{
            res.status(403).send({
                success: false,
                msg: "Error in inserting faculty"
            })
        }
    })
}