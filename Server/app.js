require('dotenv').config()
const express  = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

const authRoutes = require('./routes/auth.routes');
const studentRoutes = require('./routes/student.routes');
const facultyRoutes = require('./routes/faculty.routes');
const internRoutes = require('./routes/internship.route');
const academicsRoutes = require('./routes/academics.routes');

require('./config/db');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/', authRoutes);
app.use('/', studentRoutes);
app.use('/', facultyRoutes);
app.use('/', internRoutes);
app.use('/', academicsRoutes);

app.get('/', (req,res) => {
    res.send("Welcome to Student Information System Backend :)");    
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})