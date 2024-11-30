import Database from '../database.js'
import { DataTypes } from 'sequelize'
import EmployeesModel from './Employees.model.js'


class EmployeeAccountModel {
    constructor() {
        const db = new Database()
        this.sequelize = db.getSequelize()
        this.user = this. sequelize.define('UserAccount', {
            UserID: {
                type: DataTypes.STRING(36),
                primaryKey: true,
                allowNull: false
            },
            Username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            PasswordHash: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            Email: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            EmployeeID: {
                type: DataTypes.STRING(36),
                allowNull: true
            },
        }, {
            tableName: 'EmployeeAccount',
            timestamps: true
        });
        const employees = new EmployeesModel().getEmployees()
        this.user.belongsTo(employees, {
            foreignKey: 'EmployeeID',
            targetKey: 'EmployeeID',
        })
    }
    getEmployeeAccount() {
        return this.user
    }
    async init() {
        await this.sequelize.sync();
    }
}

export default EmployeeAccountModel;
