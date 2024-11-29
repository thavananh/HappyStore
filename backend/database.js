import { Sequelize } from 'sequelize';


class Database {
    constructor() {
        this.sequelize = new Sequelize('happy_store', 'root', '', {
            host: 'localhost',
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

    async connect() {
        try {
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
