const express = require("express");
const app = express();
const port = 3000;
const bhattRoutes = require('./controllers/bhatt')


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/bhatt', bhattRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// app.listen(3000, () => {
//     console.log(`\nExpress departing now from port 3000\n`)
// })