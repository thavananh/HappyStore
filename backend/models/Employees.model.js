import sequelize from '../database.js'
import { DataTypes } from 'sequelize'

const Employees = sequelize.define('Employees', {
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
