import sequelize from "../database.js"
import { DataTypes } from 'sequelize'

export const suppliersModel = sequelize.define('Suppliers', {
    SupplierID: {
        type: DataTypes.STRING(20),
        primaryKey: true,
        allowNull: false
    },
    SupplierName: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    ContactName: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    PhoneNumber: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    Email: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    Address: {
        type: DataTypes.TEXT,
        allowNull: true
    },
}, {
    tableName: 'Suppliers',
    timestamps: true
});

/*
CREATE TABLE Suppliers (
    SupplierID VARCHAR(20) PRIMARY KEY,
    SupplierName VARCHAR(100) NOT NULL,
    ContactName VARCHAR(100),
    PhoneNumber VARCHAR(20),
    Email VARCHAR(100),
    Address TEXT,
    CreatedDate DATETIME DEFAULT CURRENT_TIMESTAMP
);
* */
