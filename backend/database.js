import { Sequelize } from 'sequelize';

// Cấu hình kết nối với cơ sở dữ liệu
const sequelize = new Sequelize('happy_store', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // Optional: Thêm một số cấu hình khác (tùy chọn)
    logging: false, // Tắt log SQL (tùy chọn)
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

export default sequelize;

