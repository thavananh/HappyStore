import Database from '../database.js';
import OrdersModel from './Orders.model.js';
import { DataTypes } from 'sequelize';
import PaymentModel from './Payment.model.js';

class OrderPayment {
    constructor () {
        const db = new Database();
        this.sequelize = db.getSequelize();
        this.orderPayment = this.sequelize.define('OrderPayment', {
            PaymentID: {
                type: DataTypes.STRING(36),
                primaryKey: true,
                allowNull: false
            },
            OrderID: {
                type: DataTypes.STRING(36),
                primaryKey: true,
                allowNull: false
            }
        }, {
            tableName: 'OrderPayment',
            timestamps: true
        });

        // Mối quan hệ với Payment và Orders
        const payment = new PaymentModel().getPayment();
        this.orderPayment.belongsTo(payment, {
            foreignKey: 'PaymentID',
            targetKey: 'PaymentID'
        });

        const orders = new OrdersModel().getOrders();
        this.orderPayment.belongsTo(orders, {
            foreignKey: 'OrderID',
            targetKey: 'OrderID'
        });
    }

    getOrderPayment() {
        return this.orderPayment;
    }

    async init() {
        await this.sequelize.sync();
    }

    async addOrderPayment(data) {
        try {
            const newOrderPayment = await this.orderPayment.create(data);
            return newOrderPayment;
        } catch (error) {
            throw error;
        }
    }

    async updateOrderPayment(orderId, paymentId, updates) {
        try {
            const [updatedRows] = await this.orderPayment.update(updates, {
                where: { OrderID: orderId, PaymentID: paymentId }
            });
            return updatedRows;
        } catch (error) {
            throw error;
        }
    }

    async searchOrderPayment(criteria) {
        try {
            const orderPayments = await this.orderPayment.findAll({
                where: { ...criteria }
            });
            return orderPayments;
        } catch (error) {
            throw error;
        }
    }

    async deleteOrderPayment(orderId, paymentId) {
        try {
            const deletedRows = await this.orderPayment.destroy({
                where: { OrderID: orderId, PaymentID: paymentId }
            });
            return deletedRows;
        } catch (error) {
            throw error;
        }
    }
}

export default OrderPayment;
