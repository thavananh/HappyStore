import sequelize from '../database.js'
import { DataTypes } from 'sequelize'

const categoriesModel = sequelize.define('Categories', {
    CategoryId: {
        type: DataTypes.STRING(20),
        primaryKey: true,
        allowNull: false
    },
    CategoryName: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    Description: {
        type: DataTypes.TEXT,
    }
}, {
    tableName: "Categories",
    timestamps: true,
})

export default categoriesModel


/*
* CREATE TABLE Categories (
    CategoryID VARCHAR(20) PRIMARY KEY,
    CategoryName VARCHAR(100) NOT NULL,
    Description TEXT
);*/
