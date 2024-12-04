import { DataTypes } from 'sequelize';
import Database from '../database.js';
import CategoriesModel from './Categories.model.js';

class ProductsModel {
    constructor () {
        const db = new Database();
        this.sequelize = db.getSequelize();
        this.products = this.sequelize.define('Products', {
            ProductID: {
                type: DataTypes.STRING(36),
                primaryKey: true,
                allowNull: false,
            },
            ProductName: {
                type: DataTypes.STRING(200),
                allowNull: false,
            },
            CategoryID: {
                type: DataTypes.STRING(36),
                allowNull: false,
            },
            Price: {
                type: DataTypes.DECIMAL(10, 3),
                allowNull: false,
            },
            Stock: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
            },
            Description: {
                type: DataTypes.TEXT,
            }
        }, {
            tableName: "Products",
            timestamps: true,
        });

        const categories = new CategoriesModel().getCategories();
        this.products.belongsTo(categories, {
            foreignKey: 'CategoryID',
            targetKey: 'CategoryID',
        });
    }

    getProducts() {
        return this.products;
    }

    async init() {
        await this.sequelize.sync();
    }

    async addProduct(data) {
        try {
            const newProduct = await this.products.create(data);
            return newProduct;
        } catch (error) {
            throw error;
        }
    }

    async updateProduct(productId, updates) {
        try {
            const [updatedRows] = await this.products.update(updates, {
                where: { ProductID: productId }
            });
            return updatedRows;
        } catch (error) {
            throw error;
        }
    }

    async searchProduct(criteria) {
        try {
            const products = await this.products.findAll({
                where: { ...criteria }
            });
            return products;
        } catch (error) {
            throw error;
        }
    }

    async deleteProduct(productId) {
        try {
            const deletedRows = await this.products.destroy({
                where: { ProductID: productId }
            });
            return deletedRows;
        } catch (error) {
            throw error;
        }
    }
}

export default ProductsModel;
