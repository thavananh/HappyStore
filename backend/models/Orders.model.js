import { DataTypes } from 'sequelize';
import Database from '../database.js';
import CustomersModel from './Customers.model.js';

class OrdersModel {
    constructor () {
        const db = new Database();
        this.sequelize = db.getSequelize();
        this.orders = this.sequelize.define('Orders', {
            OrderID: {
                type: DataTypes.STRING(36),
                primaryKey: true
            },
            CustomerID: {
                type: DataTypes.STRING(36),
                allowNull: false
            },
            TotalAmount: {
                type: DataTypes.DECIMAL(10, 3),
                allowNull: false
            },
            Status: {
                type: DataTypes.STRING(20),
                defaultValue: 'Pending'
            }
        }, {
            tableName: 'Orders',
            timestamps: true
        });

        const customers = new CustomersModel().getCustomers();
        this.orders.belongsTo(customers, {
            foreignKey: 'CustomerID',
            targetKey: 'CustomerID',
        });
    }

    getOrders() {
        return this.orders;
    }

    async init() {
        await this.sequelize.sync();
    }

    async addOrder(data) {
        try {
            const newOrder = await this.orders.create(data);
            return newOrder;
        } catch (error) {
            throw error;
        }
    }

    async updateOrder(orderId, updates) {
        try {
            const [updatedRows] = await this.orders.update(updates, {
                where: { OrderID: orderId }
            });
            return updatedRows;
        } catch (error) {
            throw error;
        }
    }

    async searchOrder(criteria) {
        try {
            const orders = await this.orders.findAll({
                where: { ...criteria }
            });
            return orders;
        } catch (error) {
            throw error;
        }
    }

    async deleteOrder(orderId) {
        try {
            const deletedRows = await this.orders.destroy({
                where: { OrderID: orderId }
            });
            return deletedRows;
        } catch (error) {
            throw error;
        }
    }
}

export default OrdersModel;
