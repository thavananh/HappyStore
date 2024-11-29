import sequelize from '../database.js'
import { DataTypes } from 'sequelize'
import ordersModel from './Orders.model.js'

export const OrderDetails = sequelize.define('OrderDetails', {
    OrderDetailID: {
        type: DataTypes.STRING(20),
        primaryKey: true,
        allowNull: false
    },
    OrderID: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    ProductID: {
        type: DataTypes.STRING(20),
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

// Mối quan hệ giữa OrderDetails và Orders
OrderDetails.belongsTo(ordersModel, {
    foreignKey: 'OrderID',
    targetKey: 'OrderID'
});

// Mối quan hệ giữa OrderDetails và Products
OrderDetails.belongsTo(ordersModel, {
    foreignKey: 'ProductID',
    targetKey: 'ProductID'
});


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
