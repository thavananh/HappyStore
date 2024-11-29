import sequelize from '../database.js'
import { DataTypes } from 'sequelize'
import Database from '../database.js'
import CustomersModel from './Customers.model.js'

class OrdersModel {
    constructor () {
        const db = new Database()
        this.sequelize = db.getSequelize()
        this.orders = this.sequelize.define('Orders', {
            OrderID: {
                type: DataTypes.STRING(20),
                primaryKey: true
            },
            CustomerID: {
                type: DataTypes.STRING(20),
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
            tableName: 'Orders', // Tên bảng trong cơ sở dữ liệu
            timestamps: true
        });

        const customers = new CustomersModel().getCustomers()

        this.orders.belongsTo(customers, {
            foreignKey: 'CustomerID',
            targetKey: 'CustomerID',
            onDelete: 'CASCADE',  // Xóa đơn hàng nếu khách hàng bị xóa
            onUpdate: 'CASCADE'   // Cập nhật CustomerID nếu có thay đổi
        });
    }
    getOrders() {
        return this.orders
    }
    async init() {
        await this.sequelize.sync();
    }
}

export default OrdersModel


/*
* CREATE TABLE Orders (
    OrderID VARCHAR(20) PRIMARY KEY,
    CustomerID VARCHAR(20),
    TotalAmount DECIMAL(10, 3),
    Status VARCHAR(20) DEFAULT 'Pending',
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);*/
