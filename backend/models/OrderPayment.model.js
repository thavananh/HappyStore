import Database from '../database.js'
import OrdersModel from './Orders.model.js'
import {DataTypes} from 'sequelize'
import PaymentModel from './Payment.model.js'

class OrderPayment {
    constructor () {
        const db = new Database()
        this.sequelize = db.getSequelize()
        this.orderPayment = this.sequelize.define('OrderPayment', {
            PaymentID: {
                type: DataTypes.STRING(20),
                primaryKey: true,
                allowNull: false
            },
            OrderID: {
                type: DataTypes.STRING(20),
                primaryKey: true,
                allowNull: false
            }
        }, {
            tableName: 'OrderPayment',
            timestamps: true
        });


        // Mối quan hệ với Payment và Orders
        const payment = new PaymentModel().getPayment()
        this.orderPayment.belongsTo(payment, {
            foreignKey: 'PaymentID',
            targetKey: 'PaymentID'
        });

        const orders = new OrdersModel().getOrders();
        this.orderPayment.belongsTo(orders, {
            foreignKey: 'OrderID',
            targetKey: 'OrderID'
        });
    }
    getOderPayment() {
        return this.orderPayment
    }
    async init() {
        await this.sequelize.sync()
    }
}

export default OrderPayment
