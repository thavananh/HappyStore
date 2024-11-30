
import { DataTypes } from 'sequelize'
import Database from '../database.js'

class CategoriesModel {
    constructor() {
        const db = new Database()
        this.sequelize = db.getSequelize()
        this.categories = this.sequelize.define('Categories', {
            CategoryID: {
                type: DataTypes.STRING(36),
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
    }
    getCategories() {
        return this.categories
    }
    async init() {
        await this.sequelize.sync()
    }
}

export default CategoriesModel


/*
* CREATE TABLE Categories (
    CategoryID VARCHAR(20) PRIMARY KEY,
    CategoryName VARCHAR(100) NOT NULL,
    Description TEXT
);*/
