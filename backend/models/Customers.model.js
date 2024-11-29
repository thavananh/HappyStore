import sequelize from '../database.js'
import { DataTypes, INTEGER } from 'sequelize'

const customersModel = sequelize.define('Customers', {
    CustomerId: {
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
})

export default customersModel

/*
    CREATE TABLE Customers (
        CustomerID VARCHAR(20) PRIMARY KEY,
        FullName VARCHAR(100) NOT NULL,
        PhoneNumber VARCHAR(20),
        Email VARCHAR(100),
        Address TEXT,
    );
*/
