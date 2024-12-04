import Database from '../database.js';
import { DataTypes } from 'sequelize';

import PurchaseOrdersSuppliersModel from './PurchaseOrdersSupplier.model.js';
import ProductsModel from './Products.model.js';

class PurchaseOrderDetailsModel {
    constructor() {
        const db = new Database();
        this.sequelize = db.getSequelize();
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

        const PurchaseOrdersSuppliers = new PurchaseOrdersSuppliersModel().getPurchaseOrdersSuppliers();
        // Mối quan hệ với PurchaseOrders và Products
        this.purchaseOrderDetails.belongsTo(PurchaseOrdersSuppliers, {
            foreignKey: 'PurchaseOrderID',
            targetKey: 'PurchaseOrderID'
        });

        const products = new ProductsModel().getProducts();
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

    async addPurchaseOrderDetail(data) {
        try {
            const newOrderDetail = await this.purchaseOrderDetails.create(data);
            return newOrderDetail;
        } catch (error) {
            throw error;
        }
    }

    async updatePurchaseOrderDetail(detailId, updates) {
        try {
            const [updatedRows] = await this.purchaseOrderDetails.update(updates, {
                where: { PurchaseOrderDetailID: detailId }
            });
            return updatedRows;
        } catch (error) {
            throw error;
        }
    }

    async searchPurchaseOrderDetail(criteria) {
        try {
            const orderDetails = await this.purchaseOrderDetails.findAll({
                where: { ...criteria }
            });
            return orderDetails;
        } catch (error) {
            throw error;
        }
    }

    async deletePurchaseOrderDetail(detailId) {
        try {
            const deletedRows = await this.purchaseOrderDetails.destroy({
                where: { PurchaseOrderDetailID: detailId }
            });
            return deletedRows;
        } catch (error) {
            throw error;
        }
    }
}

export default PurchaseOrderDetailsModel;
