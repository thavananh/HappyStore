import Database from '../database.js';
import { DataTypes, Op } from 'sequelize';
import EmployeesModel from './Employees.model.js';

class InitializationStatusModel {
    constructor() {
        const db = new Database();
        this.sequelize = db.getSequelize();
        this.initalizationStatus = this.sequelize.define('InitializationStatus', {
            InitID: {
                type: DataTypes.STRING(36),
                primaryKey: true,
            },
            RunMode: {
                type: DataTypes.STRING(50),
            }
        }, {
            tableName: 'InitializationStatus',
            timestamps: true
        });
    }

    // Khởi tạo các bảng trong cơ sở dữ liệu
    async init() {
        try {
            await this.sequelize.sync();
            console.log('EmployeeAccount table synced successfully.');
        } catch (error) {
            console.error('Error syncing EmployeeAccount table:', error);
        }
    }

    // Lấy đối tượng Sequelize model
    getInitializationStatus() {
        return this.initalizationStatus;
    }

}

export default InitializationStatusModel;
