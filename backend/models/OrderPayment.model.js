const OrderPayment = sequelize.define('OrderPayment', {
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
OrderPayment.belongsTo(Payment, {
    foreignKey: 'PaymentID',
    targetKey: 'PaymentID'
});

OrderPayment.belongsTo(Orders, {
    foreignKey: 'OrderID',
    targetKey: 'OrderID'
});
