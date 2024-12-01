import Database from '../database.js'
import { DataTypes } from 'sequelize'
import CustomersModel from './Customers.model.js'

class CustomerAccountModel {
    constructor() {
        const db = new Database()
        this.sequelize = db.getSequelize()
        this.user = this. sequelize.define('CustomerAccount', {
            UserID: {
                type: DataTypes.STRING(36),
                primaryKey: true,
                allowNull: false
            },
            Username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            PasswordHash: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            Email: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            PhoneNumber: {
                type: DataTypes.STRING(20),
                allowNull: true
            },
            CustomerID: {
                type: DataTypes.STRING(36),
                allowNull: false,
            },
        }, {
            tableName: 'CustomerAccount',
            timestamps: true
        });
        const customers = new CustomersModel().getCustomers()
        this.user.belongsTo(customers, {
            foreignKey: 'CustomerID',
            targetKey: 'CustomerID',
        })
    }
    getCustomerAccount() {
        return this.user
    }
    async init() {
        await this.sequelize.sync();
    }
}

export default CustomerAccountModel;
