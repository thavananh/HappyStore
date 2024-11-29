import sequelize from '../database.js'
import { DataTypes, INTEGER } from 'sequelize'

const productsModel = sequelize.define('Products', {
    ProductId: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    ProductName: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    CategoryId: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    Price: {
        type: DataTypes.DECIMAL(10, 3),
        allowNull: false,
    },
    Stock: {
        type: INTEGER,
        defaultValue: 0,
    },
    Description: {
        type: DataTypes.TEXT,
    }
}, {
    tableName: "Products",
    timestamps: true,
})


productsModel.associate = (models) => {
    productsModel.belongsTo(model.Categories, {
        foreignKey: 'CategoryId',
        targetKey: 'ProductId',
        onDelete: 'CASCADE', // Xoá sản phẩm nếu loại hàng bị xoá
        onUpdate: 'CASCADE' // Cập nhật CategoryId nếu bị thay đổi
    })
}


// // Định nghĩa quan hệ giữa Orders và Customers
// orders.associate = (models) => {
//     orders.belongsTo(models.Customers, {
//         foreignKey: 'CustomerID',
//         targetKey: 'CustomerID',
//         onDelete: 'CASCADE',  // Xóa đơn hàng nếu khách hàng bị xóa
//         onUpdate: 'CASCADE'   // Cập nhật CustomerID nếu có thay đổi
//     });
// };


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
