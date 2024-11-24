const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Kết nối MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Tên người dùng MySQL của bạn
    password: '', // Mật khẩu MySQL (để trống nếu chưa đặt)
    database: 'happystore', // Tên cơ sở dữ liệu của bạn
});

db.connect((err) => {
    if (err) {
        console.error('Kết nối MySQL thất bại:', err);
    } else {
        console.log('Kết nối MySQL thành công!');
    }
});

// API: Lấy danh sách dữ liệu
app.get('/api/data', (req, res) => {
    db.query('SELECT * FROM ten_bang', (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});

// API: Thêm dữ liệu
app.post('/api/data', (req, res) => {
    const { column1, column2 } = req.body;
    const query = 'INSERT INTO ten_bang (column1, column2) VALUES (?, ?)';
    db.query(query, [column1, column2], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json({ success: true, id: results.insertId });
        }
    });
});

// Khởi chạy server
app.listen(3000, () => {
    console.log('Server chạy tại http://localhost:3000');
});
