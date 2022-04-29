const connection = require ('../config/db');

module.exports.postInternship = (req, res) => {
  const {company_name, position, duration, student_id} = req.body;

  const internData = {
    company_name,
    position,
    duration,
    student_id,
  };
  const query = `INSERT INTO internship (company_name, position, duration, student_id) values (?, ?, ?, ?)`;

  connection.query (query, [company_name, position, duration, student_id], (err, rows, fields) => {
    if (rows) {
      res.status(200).send ({
        success: true,
        data: internData,
      });
    } else {
      res.status(403).send ({
        success: false,
        msg: 'Cannot insert data into internship data',
      });
    }
  });
};

module.exports.getParticularInternData = (req, res) => {
  const query = `SELECT * FROM internship where student_id = "${req.params.id}"`;

  connection.query (query, (err, rows, fields) => {
    res.status (200).send ({
      success: true,
      data: rows[0],
    });
  });
};
