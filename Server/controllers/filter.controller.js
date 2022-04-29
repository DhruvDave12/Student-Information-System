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
    var { backlog, cpi, spi, quantityCPI, quantitySPI} = req.body;
    if(!backlog){
        backlog = "null_backlog";
    }
    if(!cpi){
        cpi = -1;
    }
    if(!spi){
        spi = -1;
    }

    var sign1, sign2;
    if(quantityCPI === "equal"){
        sign1 = "=";
    } else if(quantityCPI === "greater"){
        sign1 = ">";
    } else if (quantityCPI === "less"){
        sign1 = "<";
    }

    if(quantitySPI === "equal"){
        sign2 = "=";
    } else if(quantitySPI === "greater"){
        sign2 = ">";
    } else if (quantitySPI === "less"){
        sign2 = "<";
    }
    const query = `select * from student where student_id in (select student_id from academics where backlog = "${backlog}" or current_cpi ${sign1} ${cpi} or spi ${sign2} ${spi})`;
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
    var { company, duration, position, cpi, quantityCPI } = req.body;

    // Logic to handle any one
    if(!company){
        company = "null_company"
    }
    if(!duration){
        duration = "null_duration"
    }
    if(!position){
        position = "null_position"
    }
    if(!cpi){
        cpi = -1
    }

    var sign3;
    if(quantityCPI === "equal"){
        sign3 = "=";
    } else if(quantityCPI === "greater"){
        sign3 = ">";
    } else if(quantityCPI === "less"){
        sign3 = "<";
    }
    const query = `select * from student where student_id in (select academics.student_id from academics inner join internship on academics.student_id = internship.student_id where internship.company_name = '${company}' or academics.current_cpi ${sign3} ${cpi} or internship.duration = '${duration}' or internship.position = '${position}')`;
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
