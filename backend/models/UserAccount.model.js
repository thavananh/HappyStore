import sequelize from "../routes/database.js"
import { DataTypes } from 'sequelize'


const userSchema = sequelize.define("user", {
    username: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    displayName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: "userAccount",
    timestamps: false,
})

export default userSchema
