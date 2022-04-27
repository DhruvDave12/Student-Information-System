const connection = require('../config/db');

module.exports.postExtraData = (req,res) => {
    const { student_id, backlog, current_cpi, spi } = req.body;
    const academicsData = {
        student_id,
        backlog,
        current_cpi,
        spi
    }

    const query = `INSERT into academics (student_id, backlog, current_cpi, spi) values ("${student_id}", "${backlog}", "${current_cpi}", "${spi}")`;

    connection.query(query, (err,rows,fields) => {
        if(rows){
            res.status(200).send({
                success: true,
                data: academicsData
            })
        }
        else {
            res.status(403).send({
                success: false,
                msg: "Cannot post data"
            })
        }
    })
}

module.exports.getParticularStudentAcademics = (req,res) => {
    const { id } = req.params;
    const query =  `SELECT * FROM ACADEMICS where student_id = "${id}"`;
    connection.query(query, (err,rows,fields) => {
        if(rows){
            res.status(200).send({
                success: true,
                data: rows
            })
        }
        else{
            res.status(403).send({
                success: false,
                msg: "Error while getting data"
            })
        }
    })
}

module.exports.updateParticularStudentAcademics = (req,res) => {
    const { id } = req.params;
    const { backlog, cpi, spi } = req.body;

    const updatedData = {
        backlog,
        cpi,
        spi
    }
    const query = "UPDATE academics set backlog = ?, current_cpi = ?, spi = ? where student_id = ?";

    connection.query(query, [backlog, cpi, spi, id], (err,rows,fields) => {
        if(rows){
            res.status(200).send({
                success: true,
                data: updatedData
            })
        } else {
            res.status(403).send({
                success: false,
                msg: "Error while updating the academics data"
            })
        }
    })

}