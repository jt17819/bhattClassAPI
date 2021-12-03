//controller

const express = require('express');
const router = express.Router();

const bhatt = require('../data')

router.get('/', (req, res) => {
    res.send(bhatt)
})

router.get('/:id', (req, res) => {
    const studentId = req.params.id - 1;
    const selectedStudent = bhatt[studentId];
    
    res.send(selectedStudent);
})


module.exports = router;