require('dotenv').config()
const express  = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const studentRoutes = require('./routes/student.routes');
const authRoutes = require('./routes/auth.routes');
const connection = require('./config/db');

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/', studentRoutes);
app.use('/', authRoutes);

app.get('/', (req,res) => {
    res.send("Welcome to Student Information System Backend :)");    
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})