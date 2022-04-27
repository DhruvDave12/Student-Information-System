const connection = require ('../config/db');

module.exports.getAllStudents = (req, res) => {
  const query = 'SELECT * FROM student';
  connection.query (query, (err, rows, fields) => {
    if (rows) {
      res.status (200).send ({
        success: true,
        data: rows,
      });
    }
    else{
      res.status (403).send ({
        success: false,
        data: 'Database is empty',
      });
    }
  });
};

module.exports.getParticularStudent = (req, res) => {
  const {id} = req.params;
  const query = 'SELECT * FROM student where student_id = ?';

  connection.query (query, [id], (err, rows, fields) => {
    if (rows) {
      res.status (200).send ({
        success: true,
        data: rows,
      });
    } else {
      res.status (403).send ({
        success: false,
        msg: 'No such student exists',
      });
    }
  });
};

module.exports.postExtraData = (req, res) => {
  const {
    first_name,
    last_name,
    middle_name,
    contact,
    major,
    dob,
    batch,
    student_id,
    email,
  } = req.body;
  const data = {
    first_name,
    last_name,
    middle_name,
    contact,
    major,
    dob,
    batch,
    student_id,
    email,
  };
  const query =
    'insert into student (student_id, first_name, middle_name, last_name, dob, contact, major, batch, email) values (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  connection.query (
    query,
    [
      student_id,
      first_name,
      middle_name,
      last_name,
      dob,
      contact,
      major,
      batch,
      email,
    ],
    (err, rows, fields) => {
      if (rows) {
        res.status (200).send ({
          success: true,
          msg: 'Data posted',
          userData: data
        });
      } else {
        res.status (403).send ({
          success: false,
          msg: 'Error while posting data',
          errMsg: err,
        });
      }
    }
  );
};

module.exports.updateStudent = (req, res) => {
  const {id} = req.params;
  const {
    first_name,
    last_name,
    middle_name,
    contact,
    major,
    dob,
    batch,
    email
  } = req.body;
  const query =
    'UPDATE student set first_name = ?, last_name = ?, middle_name = ?, contact = ?, major = ?, dob = ?, batch = ?, email = ? WHERE student_id = ?';
  connection.query (
    query,
    [
      first_name,
      last_name,
      middle_name,
      contact,
      major,
      dob,
      batch,
      email,
      id
    ],
    (err, rows, fields) => {
      if (rows) {
        res.status(200).send({
          success: true,
          msg: 'Data updated',
        });
      } else {
        res.status(403).send({
          success: false,
          msg: 'Error occured while updating the data',
        });
      }
    }
  );
};
