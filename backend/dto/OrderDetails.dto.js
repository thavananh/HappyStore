class OrderDetailsDTO {
    OrderDetailID;
    OrderID;
    ProductID;
    Quantity;
    UnitPrice;
    constructor(data) {
        this.OrderDetailID = data.OrderDetailID;
        this.OrderID = data.OrderID;
        this.ProductID = data.ProductID;
        this.Quantity = data.Quantity;
        this.UnitPrice = data.UnitPrice;
    }
}

export default OrderDetailsDTO;
