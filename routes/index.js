const express = require('express');
const router = express.Router();

const { Employee } = require('../models/employee');

// Get all records
router.get('/api/employees', (req, res) => {
    Employee.find({}, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});

// Save record
router.post('/api/employee/add', (req, res) => {
    const emp = new Employee({
        name: req.body.name,
        email: req.body.email,
        salary: req.body.salary,
    });
    emp.save((err, data) => {
        res.status(200).json({
            code: 200,
            message: 'Employee added successfully',
            addEmplyee: data,
        });
    });
});

// Get single record
router.get('/api/employee/:id', (req, res) => {
    Employee.findById(req.params.id, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});

module.exports = router;

// 613c9261a27a71a405e98d71
