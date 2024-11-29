import sequelize from "../database.js"
import { DataTypes } from 'sequelize'
import {PurchaseOrders_Suppliers} from "./PurchaseOrders_Supplier.js"
import {productsModel} from './Products.model.js'

const PurchaseOrderDetails_Supplier = sequelize.define('PurchaseOrderDetails_Supplier', {
    PurchaseOrderDetailID: {
        type: DataTypes.STRING(20),
        primaryKey: true,
        allowNull: false
    },
    PurchaseOrderID: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    ProductID: {
        type: DataTypes.STRING(20),
        allowNull: true
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
    tableName: 'PurchaseOrderDetails_Supplier',
    timestamps: false
});

// Mối quan hệ với PurchaseOrders và Products
PurchaseOrderDetails_Supplier.belongsTo(PurchaseOrders_Suppliers, {
    foreignKey: 'PurchaseOrderID',
    targetKey: 'PurchaseOrderID'
});

PurchaseOrderDetails_Supplier.belongsTo(productsModel, {
    foreignKey: 'ProductID',
    targetKey: 'ProductID'
});
