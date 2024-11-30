import Database from '../database.js'
import { DataTypes } from 'sequelize'

import PurchaseOrdersSuppliersModel from './PurchaseOrdersSupplier.model.js';
import ProductsModel from './Products.model.js'

class PurchaseOrderDetailsModel {
    constructor() {
        const db = new Database()
        this.sequelize = db.getSequelize()
        this.purchaseOrderDetails = this.sequelize.define('PurchaseOrderDetailsSupplier', {
            PurchaseOrderDetailID: {
                type: DataTypes.STRING(36),
                primaryKey: true,
                allowNull: false
            },
            PurchaseOrderID: {
                type: DataTypes.STRING(36),
                allowNull: true
            },
            ProductID: {
                type: DataTypes.STRING(36),
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
            tableName: 'PurchaseOrderDetailsSupplier',
            timestamps: false
        });

        const PurchaseOrdersSuppliers = new PurchaseOrdersSuppliersModel().getPurchaseOrdersSuppliers()
        // Mối quan hệ với PurchaseOrders và Products
        this.purchaseOrderDetails.belongsTo(PurchaseOrdersSuppliers, {
            foreignKey: 'PurchaseOrderID',
            targetKey: 'PurchaseOrderID'
        });

        const products = new ProductsModel().getProducts()
        this.purchaseOrderDetails.belongsTo(products, {
            foreignKey: 'ProductID',
            targetKey: 'ProductID'
        });
    }
    getPurchaseOrdersDetails() {
        return this.purchaseOrderDetails;
    }
    async init() {
        await this.sequelize.sync();
    }
}

export default PurchaseOrderDetailsModel
