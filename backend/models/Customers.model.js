import { DataTypes } from 'sequelize';
import Database from '../database.js';

class CustomersModel {
    constructor() {
        const db = new Database();
        this.sequelize = db.getSequelize();
        this.customer = this.sequelize.define('Customers', {
            CustomerID: {
                type: DataTypes.STRING(36),
                primaryKey: true,
                allowNull: false,
            },
            FirstName: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            LastName: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            PhoneNumber: {
                type: DataTypes.STRING(20),
                allowNull: true,
            },
            Email: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            Address: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            CustomerType: {
                type: DataTypes.STRING(50),
                defaultValue: 'Regular',
                allowNull: true
            },
        }, {
            tableName: 'Customers', // Tên bảng trong cơ sở dữ liệu
            timestamps: true
        });
    }

    getCustomers() {
        return this.customer;
    }

    // Khởi tạo các bảng trong cơ sở dữ liệu
    async init() {
        try {
            await this.sequelize.sync();
            console.log('Customers table synced successfully.');
        } catch (error) {
            console.error('Error syncing Customers table:', error);
        }
    }

    /**
     * Thêm một khách hàng mới
     * @param {Object} data - Dữ liệu khách hàng
     * @returns {Object} Khách hàng vừa được thêm
     */
    async addCustomer(data) {
        try {
            const newCustomer = await this.customer.create(data);
            return newCustomer;
        } catch (error) {
            console.error('Error adding customer:', error);
            throw error;
        }
    }

    /**
     * Cập nhật thông tin khách hàng
     * @param {String} customerId - ID của khách hàng cần cập nhật
     * @param {Object} updates - Dữ liệu cập nhật
     * @returns {Number} Số bản ghi bị ảnh hưởng
     */
    async updateCustomer(customerId, updates) {
        try {
            const [updatedRows] = await this.customer.update(updates, {
                where: { CustomerID: customerId }
            });
            return updatedRows;
        } catch (error) {
            console.error('Error updating customer:', error);
            throw error;
        }
    }

    /**
     * Tìm kiếm khách hàng theo các tiêu chí
     * @param {Object} criteria - Tiêu chí tìm kiếm (ví dụ: { FirstName: 'John' })
     * @returns {Array} Danh sách khách hàng tìm được
     */
    async searchCustomer(criteria) {
        try {
            const customers = await this.customer.findOne({
                where: { ...criteria }
            });
            return customers;
        } catch (error) {
            console.error('Error searching customers:', error);
            throw error;
        }
    }

    /**
     * Xoá khách hàng theo ID
     * @param {String} customerId - ID của khách hàng cần xoá
     * @returns {Number} Số bản ghi bị xoá
     */
    async deleteCustomer(customerId) {
        try {
            const deletedRows = await this.customer.destroy({
                where: { CustomerID: customerId }
            });
            return deletedRows;
        } catch (error) {
            console.error('Error deleting customer:', error);
            throw error;
        }
    }
}

export default CustomersModel;
