const connection = require ('../config/db');
const {hashSync, compareSync} = require ('bcrypt');

module.exports.registerUser = (req, res) => {
  const {email, password, type} = req.body;
  if (!email || !password || !type) {
    res.status (403).send ({
      success: false,
      msg: 'Please enter all the fields',
    });
  }

  const hashedPassword = hashSync (password, 10);
  const query =
    'INSERT INTO auth_data (email, password, type) VALUES (?, ?, ?);';

  connection.query (
    query,
    [email, hashedPassword, type],
    (err, rows, fields) => {
      res.status (200).send ({
        success: true,
        isLoggedIn: true,
        email: email,
      });
    }
  );
};

module.exports.loginUser = async (req, res) => {
  const {email, password} = req.body;

  if (!email || !password) {
    res.status (403).send ({
      success: false,
      msg: 'Please enter all the fields',
    });
  }

  const query = 'SELECT * FROM auth_data WHERE email = ?';
  var isMatch = false, currType;
  const response = await connection.promise ().query (query, [email]);
  if (compareSync(password, response[0][0].password)) {
    isMatch = true;
    currType = response[0][0].type;
  }
  if (isMatch) {
    if (response[0][0].type === 'student') {
      const query = `select * from student where email = "${email}"`;
      const newRes = await connection.promise ().query (query);
      res.status (200).send ({
        success: true,
        data: {
          isLoggedIn: true,
          userType: 'student',
          userData: newRes[0][0],
        },
      });
    } else if (response[0][0].type === 'faculty') {
      const query = `select * from faculty where email = "${email}"`;
      const newRes = await connection.promise ().query (query);
      res.status (200).send ({
        success: true,
        data: {
          isLoggedIn: true,
          userType: 'faculty',
          userData: newRes[0][0],
        },
      });
    }
  } else {
    res.status (403).send ({
      success: false,
      msg: 'Invalid email / password',
    });
  }
};
