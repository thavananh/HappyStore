
import { DataTypes } from 'sequelize'
import Database from '../database.js'

class CustomersModel {
    constructor () {
        const db = new Database()
        this.sequelize = db.getSequelize()
        this.customer = this.sequelize.define('Customers', {
            CustomerID: {
                type: DataTypes.STRING(20),
                primaryKey: true,
                allowNull: false,
            },
            FirstName: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            LastName: {
                type: DataTypes.STRING(50),
            },
            Phone: {
                type: DataTypes.STRING(20),
            },
            Email: {
                type: DataTypes.STRING(100),
            },
            Address: {
                type: DataTypes.TEXT,
            }
        },{
            tableName: 'Customers', // Tên bảng trong cơ sở dữ liệu
            timestamps: true
        })
    }
    getCustomers () {
        return this.customer
    }
    async init() {
        await this.sequelize.sync()
    }
}

export default CustomersModel


/*
    CREATE TABLE Customers (
        CustomerID VARCHAR(20) PRIMARY KEY,
        FullName VARCHAR(100) NOT NULL,
        PhoneNumber VARCHAR(20),
        Email VARCHAR(100),
        Address TEXT,
    );
*/
