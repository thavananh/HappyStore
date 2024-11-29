import sequelize from "../database.js"
import { DataTypes } from 'sequelize'

const UserAccount = sequelize.define('UserAccount', {
    UserID: {
        type: DataTypes.STRING(20),
        primaryKey: true,
        allowNull: false
    },
    Username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    PasswordHash: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    Role: {
        type: DataTypes.STRING(50),
        defaultValue: 'User',
        allowNull: true
    },
    EmployeeID: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    CustomerID: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    CreatedDate: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: true
    }
}, {
    tableName: 'UserAccount',
    timestamps: true
});

