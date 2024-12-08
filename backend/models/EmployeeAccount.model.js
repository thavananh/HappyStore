import Database from '../database.js';
import { DataTypes, Op } from 'sequelize';
import EmployeesModel from './Employees.model.js';

class EmployeeAccountModel {
    constructor() {
        const db = new Database();
        this.sequelize = db.getSequelize();
        this.user = this.sequelize.define('EmployeeAccount', {
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
            EmployeeID: {
                type: DataTypes.STRING(36),
                allowNull: true
            },
        }, {
            tableName: 'EmployeeAccount',
            timestamps: true
        });

        const employees = new EmployeesModel().getEmployees();
        this.user.belongsTo(employees, {
            foreignKey: 'EmployeeID',
            targetKey: 'EmployeeID',
        });
    }

    // Khởi tạo các bảng trong cơ sở dữ liệu
    async init() {
        try {
            await this.sequelize.sync();
            console.log('EmployeeAccount table synced successfully.');
        } catch (error) {
            console.error('Error syncing EmployeeAccount table:', error);
        }
    }

    // Lấy đối tượng Sequelize model
    getEmployeeAccount() {
        return this.user;
    }

    /**
     * Thêm một tài khoản nhân viên mới
     * @param {Object} data - Dữ liệu tài khoản nhân viên
     * @returns {Object} Tài khoản nhân viên vừa được thêm
     */
    async addEmployeeAccount(data) {
        try {
            const newAccount = await this.user.create(data);
            return newAccount;
        } catch (error) {
            console.error('Error adding employee account:', error);
            throw error;
        }
    }

    /**
     * Cập nhật thông tin tài khoản nhân viên
     * @param {String} userId - ID của người dùng cần cập nhật
     * @param {Object} updates - Dữ liệu cập nhật
     * @returns {Number} Số bản ghi bị ảnh hưởng
     */
    async updateEmployeeAccount(userId, updates) {
        try {
            const [updatedRows] = await this.user.update(updates, {
                where: { UserID: userId }
            });
            return updatedRows;
        } catch (error) {
            console.error('Error updating employee account:', error);
            throw error;
        }
    }

    /**
     * Tìm kiếm tài khoản nhân viên theo các tiêu chí
     * @param {Object} criteria - Tiêu chí tìm kiếm (ví dụ: { Username: 'john_doe' })
     * @returns {Object} Danh sách tài khoản nhân viên tìm được
     */
    async searchEmployeeAccount(criteria) {
        try {
            const account = await this.user.findOne({
                where: {
                    ...criteria
                }
            });
            return account;
        } catch (error) {
            console.error('Error searching employee accounts:', error);
            throw error;
        }
    }

    /**
     * Xoá tài khoản nhân viên theo ID
     * @param {String} userId - ID của người dùng cần xoá
     * @returns {Number} Số bản ghi bị xoá
     */
    async deleteEmployeeAccount(userId) {
        try {
            const deletedRows = await this.user.destroy({
                where: { UserID: userId }
            });
            return deletedRows;
        } catch (error) {
            console.error('Error deleting employee account:', error);
            throw error;
        }
    }
}

export default EmployeeAccountModel;
