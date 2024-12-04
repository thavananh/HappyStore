import Database from '../database.js';
import { DataTypes } from 'sequelize';
import SuppliersModel from './Suppliers.model.js';

class PurchaseOrdersSuppliersModel {
    constructor () {
        const db = new Database();
        this.sequelize = db.getSequelize();
        this.purchaseOrdersSuppliers = this.sequelize.define('PurchaseOrders_Suppliers', {
            PurchaseOrderID: {
                type: DataTypes.STRING(36),
                primaryKey: true,
                allowNull: false
            },
            SupplierID: {
                type: DataTypes.STRING(36),
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

        const suppliers = new SuppliersModel().getSuppliers();
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

    async addPurchaseOrderSupplier(data) {
        try {
            const newPurchaseOrder = await this.purchaseOrdersSuppliers.create(data);
            return newPurchaseOrder;
        } catch (error) {
            throw error;
        }
    }

    async updatePurchaseOrderSupplier(orderId, updates) {
        try {
            const [updatedRows] = await this.purchaseOrdersSuppliers.update(updates, {
                where: { PurchaseOrderID: orderId }
            });
            return updatedRows;
        } catch (error) {
            throw error;
        }
    }

    async searchPurchaseOrderSupplier(criteria) {
        try {
            const orders = await this.purchaseOrdersSuppliers.findAll({
                where: { ...criteria }
            });
            return orders;
        } catch (error) {
            throw error;
        }
    }

    async deletePurchaseOrderSupplier(orderId) {
        try {
            const deletedRows = await this.purchaseOrdersSuppliers.destroy({
                where: { PurchaseOrderID: orderId }
            });
            return deletedRows;
        } catch (error) {
            throw error;
        }
    }
}

export default PurchaseOrdersSuppliersModel;
