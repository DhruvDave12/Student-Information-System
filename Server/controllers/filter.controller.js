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