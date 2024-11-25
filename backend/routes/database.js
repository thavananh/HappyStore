import mysql2 from 'mysql2'

const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Thay bằng mật khẩu của bạn (Replace with your password)
    database: 'HappyStore'
});

export default db;
