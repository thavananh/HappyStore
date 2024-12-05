import Database from '../database.js';
import { DataTypes, Op } from 'sequelize';
import CustomersModel from './Customers.model.js';

class CustomerAccountModel {
    constructor() {
        const db = new Database();
        this.sequelize = db.getSequelize();
        this.user = this.sequelize.define('CustomerAccount', {
            UserID: {
                type: DataTypes.STRING(36),
                primaryKey: true,
                allowNull: false
            },
            Username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            PasswordHash: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            Email: {
                type: DataTypes.STRING(100),
                allowNull: false,
                validate: {
                    isEmail: true
                }
            },
            PhoneNumber: {
                type: DataTypes.STRING(20),
                allowNull: true
            },
            CustomerID: {
                type: DataTypes.STRING(36),
                allowNull: false,
            },
        }, {
            tableName: 'CustomerAccount',
            timestamps: true
        });

        const customers = new CustomersModel().getCustomers();
        this.user.belongsTo(customers, {
            foreignKey: 'CustomerID',
            targetKey: 'CustomerID',
        });
    }

    // Khởi tạo các bảng trong cơ sở dữ liệu
    async init() {
        try {
            await this.sequelize.sync();
            console.log('CustomerAccount table synced successfully.');
        } catch (error) {
            console.error('Error syncing CustomerAccount table:', error);
        }
    }

    // Lấy đối tượng Sequelize model
    getCustomerAccount() {
        return this.user;
    }

    /**
     * Thêm một tài khoản khách hàng mới
     * @param {Object} data - Dữ liệu tài khoản khách hàng
     * @returns {Object} Tài khoản khách hàng vừa được thêm
     */
    async addCustomerAccount(data) {
        try {
            const newAccount = await this.user.create(data);
            return newAccount;
        } catch (error) {
            console.error('Error adding customer account:', error);
            throw error;
        }
    }

    /**
     * Cập nhật thông tin tài khoản khách hàng
     * @param {String} userId - ID của người dùng cần cập nhật
     * @param {Object} updates - Dữ liệu cập nhật
     * @returns {Number} Số bản ghi bị ảnh hưởng
     */
    async updateCustomerAccount(userId, updates) {
        try {
            const [updatedRows] = await this.user.update(updates, {
                where: { UserID: userId }
            });
            return updatedRows;
        } catch (error) {
            console.error('Error updating customer account:', error);
            throw error;
        }
    }

    /**
     * Tìm kiếm tài khoản khách hàng theo các tiêu chí
     * @param {Object} criteria - Tiêu chí tìm kiếm (ví dụ: { Username: 'john_doe' })
     * @returns {Array} Danh sách tài khoản khách hàng tìm được
     */
    async searchCustomerAccount(criteria) {
        try {
            const accounts = await this.user.findOne({
                where: {
                    ...criteria
                }
            });
            return accounts;
        } catch (error) {
            console.error('Error searching customer accounts:', error);
            throw error;
        }
    }



    /**
     * Xoá tài khoản khách hàng theo ID
     * @param {String} userId - ID của người dùng cần xoá
     * @returns {Number} Số bản ghi bị xoá
     */
    async deleteCustomerAccount(userId) {
        try {
            const deletedRows = await this.user.destroy({
                where: { UserID: userId }
            });
            return deletedRows;
        } catch (error) {
            console.error('Error deleting customer account:', error);
            throw error;
        }
    }
}

export default CustomerAccountModel;
