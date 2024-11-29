import sequelize from '../database.js'
import { DataTypes } from 'sequelize'
import { suppliersModel } from './Suppliers.model.js'

export const PurchaseOrders_Suppliers = sequelize.define('PurchaseOrders_Suppliers', {
    PurchaseOrderID: {
        type: DataTypes.STRING(20),
        primaryKey: true,
        allowNull: false
    },
    SupplierID: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    TotalAmount: {
        type: DataTypes.DECIMAL(10, 3),
        allowNull: true
    },
    Status: {
        type: DataTypes.STRING(20),
        defaultValue: 'Pending',
        allowNull: true
    }
}, {
    tableName: 'PurchaseOrders_Suppliers',
    timestamps: false
});

// Mối quan hệ với Suppliers
PurchaseOrders_Suppliers.belongsTo(suppliersModel, {
    foreignKey: 'SupplierID',
    targetKey: 'SupplierID'
});
