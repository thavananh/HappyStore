import { DataTypes } from 'sequelize';
import Database from '../database.js';
import OrdersModel from './Orders.model.js';
import ProductsModel from './Products.model.js';

class OrderDetailsModel {
    constructor() {
        const db = new Database();
        this.sequelize = db.getSequelize();
        this.orderDetails = this.sequelize.define('OrderDetails', {
            OrderDetailID: {
                type: DataTypes.STRING(36),
                primaryKey: true,
                allowNull: false
            },
            OrderID: {
                type: DataTypes.STRING(36),
                allowNull: false,
            },
            ProductID: {
                type: DataTypes.STRING(36),
                allowNull: false,
            },
            Quantity: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            UnitPrice: {
                type: DataTypes.DECIMAL(10, 3),
                allowNull: true
            }
        }, {
            tableName: 'OrderDetails',
            timestamps: true
        });

        const orders = new OrdersModel().getOrders();
        this.orderDetails.belongsTo(orders, {
            foreignKey: 'OrderID',
            targetKey: 'OrderID'
        });

        const products = new ProductsModel().getProducts();
        this.orderDetails.belongsTo(products, {
            foreignKey: 'ProductID',
            targetKey: 'ProductID'
        });
    }

    getOrderDetails() {
        return this.orderDetails;
    }

    async init() {
        await this.sequelize.sync();
    }

    async addOrderDetail(data) {
        try {
            const newOrderDetail = await this.orderDetails.create(data);
            return newOrderDetail;
        } catch (error) {
            throw error;
        }
    }

    async updateOrderDetail(orderDetailId, updates) {
        try {
            const [updatedRows] = await this.orderDetails.update(updates, {
                where: { OrderDetailID: orderDetailId }
            });
            return updatedRows;
        } catch (error) {
            throw error;
        }
    }

    async searchOrderDetail(criteria) {
        try {
            const orderDetails = await this.orderDetails.findAll({
                where: { ...criteria }
            });
            return orderDetails;
        } catch (error) {
            throw error;
        }
    }

    async deleteOrderDetail(orderDetailId) {
        try {
            const deletedRows = await this.orderDetails.destroy({
                where: { OrderDetailID: orderDetailId }
            });
            return deletedRows;
        } catch (error) {
            throw error;
        }
    }
}

export default OrderDetailsModel;
