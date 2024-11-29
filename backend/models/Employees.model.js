import sequelize from '../database.js'
import { DataTypes } from 'sequelize'
import Database from '../database.js'

class EmployeesModel {
    constructor () {
        const db = new Database()
        this.sequelize = db.getSequelize()
        this.employees = this.sequelize.define('Employees', {
            EmployeeID: {
                type: DataTypes.STRING(20),
                primaryKey: true,
                allowNull: false
            },
            FullName: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            PhoneNumber: {
                type: DataTypes.STRING(20),
                allowNull: true
            },
            Email: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            Position: {
                type: DataTypes.STRING(50),
                allowNull: true
            },
            Status: {
                type: DataTypes.STRING(50),
                allowNull: true
            }
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
