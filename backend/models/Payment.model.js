import sequelize from '../database.js'
import { DataTypes } from 'sequelize'
import Database from '../database.js'

class PaymentModel {
    constructor () {
        const db = new Database()
        this.sequelize = db.getSequelize()
        this.payment = this.sequelize.define('Payment', {
            PaymentID: {
                type: DataTypes.STRING(36),
                primaryKey: true,
                allowNull: false
            },
            PaymentMethod: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            Amount: {
                type: DataTypes.DECIMAL(10, 3),
                allowNull: true
            }
        }, {
            tableName: 'Payment',
            timestamps: true
        });
    }
    getPayment() {
        return this.payment;
    }
    async init() {
        await this.sequelize.sync()
    }
}

export default PaymentModel


/*
CREATE TABLE Payment (
    PaymentID VARCHAR(20) PRIMARY KEY,
    PaymentMethod VARCHAR(20),
    Amount DECIMAL(10, 3)
);
*/
