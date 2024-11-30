class OrdersDTO {
    OrderID;
    CustomerID;
    TotalAmount;
    Status;

    constructor(data) {
        this.OrderID = data.OrderID;
        this.CustomerID = data.CustomerID;
        this.TotalAmount = data.TotalAmount;
        this.Status = data.Status;
    }
}

export default OrdersDTO;
