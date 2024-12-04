import { DataTypes } from 'sequelize';
import Database from '../database.js';

class EmployeesModel {
    constructor () {
        const db = new Database();
        this.sequelize = db.getSequelize();
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

    getEmployees() {
        return this.employees;
    }

    async init() {
        await this.sequelize.sync();
    }

    async addEmployee(data) {
        try {
            const newEmployee = await this.employees.create(data);
            return newEmployee;
        } catch (error) {
            throw error;
        }
    }

    async updateEmployee(employeeId, updates) {
        try {
            const [updatedRows] = await this.employees.update(updates, {
                where: { EmployeeID: employeeId }
            });
            return updatedRows;
        } catch (error) {
            throw error;
        }
    }

    async searchEmployee(criteria) {
        try {
            const employees = await this.employees.findAll({
                where: { ...criteria }
            });
            return employees;
        } catch (error) {
            throw error;
        }
    }

    async deleteEmployee(employeeId) {
        try {
            const deletedRows = await this.employees.destroy({
                where: { EmployeeID: employeeId }
            });
            return deletedRows;
        } catch (error) {
            throw error;
        }
    }
}

export default EmployeesModel;
