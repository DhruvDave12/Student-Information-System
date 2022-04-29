const connection = require('../config/db');

module.exports.postFilterData = (req,res) => {
    const { credit, semester, course } = req.body;
    const query = "select * from faculty where faculty_id in (select faculty_id from courses where course_id = ? or semester = ? or credits = ?)";
    
    connection.query(query, [course, semester, credit], (err,rows,fields) => {
        if(rows){
            res.status(200).send({
                success: true,
                data: rows
            });
        }
        else {
            res.status(400).send({
                success: false,
                msg: "No data found"
            });
        }
    })

}

module.exports.postCurricularFilterData = (req,res) => {
    const { cpi, clubs, events } = req.body;
    const query = `select * from student where student_id in (select curricular.student_id from curricular inner join academics on curricular.student_id = academics.student_id where curricular.clubs like '%${clubs}%' or curricular.events like '%${events}%' or academics.current_cpi like '%${cpi}%')`;
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
                msg: "Not able to get data"
            })
        }
    })

}

module.exports.postAcademicsFilterData = (req,res) => {
    const { backlog } = req.body;
    const query = `select * from student where student_id in (select student_id from academics where backlog = "${backlog}")`;
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
                msg: "Not able to get data"
            })
        }
    })
}

module.exports.postInternshipFilterData = (req,res) => {
    const { company, duration, position, cpi } = req.body;

    const query = `select * from student where student_id in (select academics.student_id from academics inner join internship on academics.student_id = internship.student_id where internship.company_name = '${company}' or academics.current_cpi > ${cpi} or internship.duration = '${duration}' or internship.position = '${position}')`;
    connection.query(query, (err,rows,fields) => {
        console.log(err);
        if(rows){
            res.status(200).send({
                success: true,
                data: rows
            })
        }
        else {
            res.status(403).send({
                success: false,
                msg: "Not able to get data"
            })
        }
    })
}