import { Sequelize } from 'sequelize';
import mysql from 'mysql2/promise'; // Cần thêm mysql2 để thực hiện query ngoài Sequelize

class Database {
    constructor() {
        this.databaseName = 'happy_store'; // Tên database
        this.username = 'root';           // Tên người dùng MySQL
        this.password = '';               // Mật khẩu
        this.host = 'localhost';          // Máy chủ
        this.sequelize = new Sequelize(this.databaseName, this.username, this.password, {
            host: this.host,
            dialect: 'mysql',
            logging: false, // Tắt log SQL (tùy chọn)
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            }
        });
    }

    async createDatabaseIfNotExists() {
        const connection = await mysql.createConnection({
            host: this.host,
            user: this.username,
            password: this.password
        });
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${this.databaseName}\``);
        console.log(`Database "${this.databaseName}" checked/created.`);
        await connection.end();
    }

    async connect() {
        try {
            await this.createDatabaseIfNotExists();
            await this.sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }

    getSequelize() {
        return this.sequelize;
    }
}

export default Database;
