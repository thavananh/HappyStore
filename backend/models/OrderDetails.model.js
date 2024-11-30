
import { DataTypes } from 'sequelize'
import Database from '../database.js'
import OrdersModel from './Orders.model.js'
import ProductsModel from './Products.model.js'


class OrderDetailsModel {
    constructor() {
        const db = new Database()
        this.sequelize = db.getSequelize()
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
            timestamps: true  // Nếu không sử dụng các trường thời gian như createdAt, updatedAt
        });

        const orders = new OrdersModel().getOrders()

        this.orderDetails.belongsTo(orders, {
            foreignKey: 'OrderID',
            targetKey: 'OrderID'
        });

        const products = new ProductsModel().getProducts()
        this.orderDetails.belongsTo(products, {
            foreignKey: 'ProductID',
            targetKey: 'ProductID'
        });
    }
    getOrderDetails() {
        return this.orderDetails
    }
    async init() {
        await this.sequelize.sync();
    }
}


export default OrderDetailsModel


/*
* CREATE TABLE OrderDetails (
    OrderDetailID VARCHAR(20) PRIMARY KEY,
    OrderID VARCHAR(20),
    ProductID VARCHAR(20),
    Quantity INT NOT NULL,
    UnitPrice DECIMAL(10, 3),
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);*/
