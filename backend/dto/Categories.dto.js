class CategoriesDTO {
    CategoryID;
    CategoryName;
    Description;
    constructor(data) {
        this.CategoryID = data.CategoryID;
        this.CategoryName = data.CategoryName;
        this.Description = data.Description;
    }
}

export default CategoriesDTO;
