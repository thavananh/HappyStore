import Database from '../database.js'
import { DataTypes } from 'sequelize'
import  SuppliersModel  from './Suppliers.model.js'

class PurchaseOrdersSuppliersModel {
    constructor () {
        const db = new Database()
        this.sequelize = db.getSequelize()
        this.purchaseOrdersSuppliers = this.sequelize.define('PurchaseOrders_Suppliers', {
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
        const suppliers = new SuppliersModel().getSuppliers()
        this.purchaseOrdersSuppliers.belongsTo(suppliers, {
            foreignKey: 'SupplierID',
            targetKey: 'SupplierID'
        });
    }
    getPurchaseOrdersSuppliers() {
        return this.purchaseOrdersSuppliers;
    }
    async init() {
        await this.sequelize.sync();
    }
}

export default PurchaseOrdersSuppliersModel

// Mối quan hệ với Suppliers

