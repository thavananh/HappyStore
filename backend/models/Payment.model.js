import sequelize from '../database.js'
import { DataTypes } from 'sequelize'

export const Payment = sequelize.define('Payment', {
    PaymentID: {
        type: DataTypes.STRING(20),
        primaryKey: true,
        allowNull: false
    },
    PaymentMethod: {
        type: DataTypes.STRING(20),
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


/*
CREATE TABLE Payment (
    PaymentID VARCHAR(20) PRIMARY KEY,
    PaymentMethod VARCHAR(20),
    Amount DECIMAL(10, 3)
);
*/
