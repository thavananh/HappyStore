import { DataTypes } from 'sequelize';
import Database from '../database.js';

class PaymentModel {
    constructor () {
        const db = new Database();
        this.sequelize = db.getSequelize();
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
        await this.sequelize.sync();
    }

    async addPayment(data) {
        try {
            const newPayment = await this.payment.create(data);
            return newPayment;
        } catch (error) {
            throw error;
        }
    }

    async updatePayment(paymentId, updates) {
        try {
            const [updatedRows] = await this.payment.update(updates, {
                where: { PaymentID: paymentId }
            });
            return updatedRows;
        } catch (error) {
            throw error;
        }
    }

    async searchPayment(criteria) {
        try {
            const payments = await this.payment.findAll({
                where: { ...criteria }
            });
            return payments;
        } catch (error) {
            throw error;
        }
    }

    async deletePayment(paymentId) {
        try {
            const deletedRows = await this.payment.destroy({
                where: { PaymentID: paymentId }
            });
            return deletedRows;
        } catch (error) {
            throw error;
        }
    }
}

export default PaymentModel;
