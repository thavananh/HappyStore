import sequelize from '../database.js'
import { DataTypes } from 'sequelize'
import Database from '../database.js'

class EmployeesModel {
    constructor () {
        const db = new Database()
        this.sequelize = db.getSequelize()
        this.employees = this.sequelize.define('Employees', {
            EmployeeID: {
                type: DataTypes.STRING(36),
                primaryKey: true,
                allowNull: false
            },
            FirstName: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            LastName: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            PhoneNumber: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            Email: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            Position: {
                type: DataTypes.STRING(50),
                allowNull: false
            },
            Status: {
                type: DataTypes.STRING(50),
                allowNull: false
            },
            Role: {
                type: DataTypes.STRING(50),
                defaultValue: 'User',
                allowNull: true
            },
        }, {
            tableName: 'Employees',
            timestamps: true
        });
    }
    getEmployees () {
        return this.employees;
    }
    async init() {
        await this.sequelize.sync()
    }
}

export default EmployeesModel
