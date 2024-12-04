import Database from '../database.js';
import { DataTypes } from 'sequelize';

class SuppliersModel {
    constructor () {
        const db = new Database();
        this.sequelize = db.getSequelize();
        this.suppliers = this.sequelize.define('Suppliers', {
            SupplierID: {
                type: DataTypes.STRING(36),
                primaryKey: true,
                allowNull: false
            },
            SupplierName: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            ContactName: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            PhoneNumber: {
                type: DataTypes.STRING(20),
                allowNull: true
            },
            Email: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            Address: {
                type: DataTypes.TEXT,
                allowNull: true
            },
        }, {
            tableName: 'Suppliers',
            timestamps: true
        });
    }

    getSuppliers () {
        return this.suppliers;
    }

    async init() {
        await this.sequelize.sync();
    }

    async addSupplier(data) {
        try {
            const newSupplier = await this.suppliers.create(data);
            return newSupplier;
        } catch (error) {
            throw error;
        }
    }

    async updateSupplier(supplierId, updates) {
        try {
            const [updatedRows] = await this.suppliers.update(updates, {
                where: { SupplierID: supplierId }
            });
            return updatedRows;
        } catch (error) {
            throw error;
        }
    }

    async searchSupplier(criteria) {
        try {
            const suppliers = await this.suppliers.findAll({
                where: { ...criteria }
            });
            return suppliers;
        } catch (error) {
            throw error;
        }
    }

    async deleteSupplier(supplierId) {
        try {
            const deletedRows = await this.suppliers.destroy({
                where: { SupplierID: supplierId }
            });
            return deletedRows;
        } catch (error) {
            throw error;
        }
    }
}

export default SuppliersModel;
