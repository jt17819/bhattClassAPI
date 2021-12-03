const express = require("express");
const app = express();
const port = 3000;
const bhattRoutes = require('./controllers/bhatt')
const teacherRoutes = require('./controllers/teachers')


app.get('/', (req, res) => {
    res.send('Hello, welcome to our class!')
})

app.use('/bhatt', bhattRoutes);

app.use('/teachers', teacherRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// app.listen(3000, () => {
//     console.log(`\nExpress departing now from port 3000\n`)
// })
module.exports = app