class PurchaseOrdersSupplierDTO {
    PurchaseOrderDetailID;
    PurchaseOrderID;
    ProductID;
    Quantity;
    UnitPrice;

    constructor(data) {
        this.PurchaseOrderDetailID = data.PurchaseOrderDetailID;
        this.PurchaseOrderID = data.PurchaseOrderID;
        this.ProductID = data.ProductID;
        this.Quantity = data.Quantity;
        this.UnitPrice = data.UnitPrice;
    }
}

export default PurchaseOrdersSupplierDTO
