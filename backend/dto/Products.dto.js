class ProductsDTO {
    ProductID;
    ProductName;
    CategoryID;
    Price;
    Stock;
    Description;

    constructor(data) {
        this.ProductID = data.ProductID;
        this.ProductName = data.ProductName;
        this.CategoryID = data.CategoryID;
        this.Price = data.Price;
        this.Stock = data.Stock;
        this.Description = data.Description;
    }
}

export default ProductsDTO;
