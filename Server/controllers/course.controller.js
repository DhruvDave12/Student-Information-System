const connection = require('../config/db');

module.exports.setCourse = (req,res) => {
    const { faculty_id, course_id, semester, credits } = req.body;

    const query = "INSERT INTO COURSES (faculty_id, semester, course_id, credits) values (?, ?, ?, ?)";

    connection.query(query, [faculty_id, semester, course_id, credits], (err,rows,fields) => {
        if(rows){
            res.status(200).send({
                success: true,
                msg: "Data posted"
            })
        } else {
            res.status(403).send({
                success: false,
                msg: "Error while posting course"
            })
        }
    })
}

module.exports.getAllCourses = (req,res) => {
    const query = "select * from courses";

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
                msg: "Error while fetching courses from data"
            })
        }
    })
}

module.exports.getParticularFacultyCourse = (req,res) => {
    const { id } = req.params;

    const query = "SELECT * FROM COURSES WHERE faculty_id = ?";
    connection.query(query, [id], (err,rows,fields) => {
        if(rows){
            res.status(200).send({
                success: true,
                data: rows[0]
            })
        }
        else {
            res.status(403).send({
                success: false,
                msg: "This faculty has no assigned course"
            })
        }
    })
}