class OrderPaymentDTO {
    PaymentID;
    OrderID;
    constructor(data) {
        this.PaymentID = data.PaymentID;
        this.OrderID = data.OrderID;
    }
}

export default OrderPaymentDTO;
