const express  = require('express');
const app = express();
const PORT = 3000;
const studentRoutes = require('./routes/student.routes');

app.use('/', studentRoutes);


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})