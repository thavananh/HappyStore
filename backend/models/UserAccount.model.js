const express = require('express');
const router = express.Router();
const Student = require('../models/student.model');

// Thêm sinh viên
router.post('/add-student', async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.json({ message: 'Thêm sinh viên thành công!', data: student });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Lấy tất cả sinh viên
router.get('/', async (req, res) => {
    try {
        const students = await Student.findAll();
        res.json(students);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Lấy sinh viên theo ID
router.get('/read-student/:id', async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (!student) return res.status(404).json({ error: 'Không tìm thấy sinh viên' });
        res.json(student);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Cập nhật sinh viên
router.put('/update-student/:id', async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (!student) return res.status(404).json({ error: 'Không tìm thấy sinh viên' });

        await student.update(req.body);
        res.json({ message: 'Cập nhật sinh viên thành công!', data: student });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Xóa sinh viên
router.delete('/delete-student/:id', async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (!student) return res.status(404).json({ error: 'Không tìm thấy sinh viên' });

        await student.destroy();
        res.json({ message: 'Xóa sinh viên thành công!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
