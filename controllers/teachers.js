//controller

const express = require('express');
const router = express.Router();

const teachers = require('../teacherdata')

router.get('/', (req, res) => {
    res.send(teachers)
})

router.get('/:id', (req, res) => {
    const teacherId = req.params.id - 1;
    const selectedTeacher = teachers[teacherId];
    
    res.send(selectedTeacher);
})


module.exports = router;