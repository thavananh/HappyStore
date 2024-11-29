
import { DataTypes } from 'sequelize'
import Database from '../database.js'
import CategoriesModel from './Categories.model.js'

class ProductsModel {
    constructor () {
        const db = new Database()
        this.sequelize = db.getSequelize()
        this.products = this.sequelize.define('Products', {
            ProductID: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false,
            },
            ProductName: {
                type: DataTypes.STRING(200),
                allowNull: false,
            },
            CategoryID: {
                type: DataTypes.STRING(20),
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
        })

        const categories = new CategoriesModel().getCategories()

        this.products.belongsTo(categories, {
            foreignKey: 'CategoryID',
            targetKey: 'CategoryID',
            onDelete: 'CASCADE', // Xoá sản phẩm nếu loại hàng bị xoá
            onUpdate: 'CASCADE' // Cập nhật CategoryId nếu bị thay đổi
        })
    }
    getProducts() {
        return this.products
    }
    async init() {
        await this.sequelize.sync();
    }
}

export default ProductsModel


/*
CREATE TABLE Products (
    ProductID VARCHAR(20) PRIMARY KEY,
    ProductName VARCHAR(200) NOT NULL,
    CategoryID VARCHAR(20),
    Price DECIMAL(10, 3) NOT NULL,
    Stock INT DEFAULT 0,
    Description TEXT,
    FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID)
);
*/
