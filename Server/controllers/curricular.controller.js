const connection = require('../config/db');

module.exports.postCourseData = (req,res) => {
    const { student_id, committee, clubs, events } = req.body;
    const currData = {
        student_id,
        committee,
        clubs,
        events
    }

    const query = "INSERT into curricular (student_id, events, clubs, committee) values (?, ?, ?, ?)";

    connection.query(query, [student_id, events, clubs, committee], (err,rows,fields) => {
        if(rows){
            res.status(200).send({
                success: true,
                data: currData
            })
        }
        else{
            res.status(403).send({
                success: false,
                msg: "Error in posting data to the curriculars table"
            })
        }
    })
}   

module.exports.getCurricular = (req,res) => {
    const { id } = req.params;

    const query = "SELECT * FROM CURRICULAR WHERE student_id = ?";
    connection.query(query, [id], (err,rows,fields) => {
        if(rows){
            res.status(200).send({
                success: true,
                data: rows[0]
            })
        }
        else{
            res.status(403).send({
                success: false,
                msg: "Cannot get data from database for this student's curricular"
            })
        }
    })
}