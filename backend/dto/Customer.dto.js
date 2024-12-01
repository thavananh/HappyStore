class CustomerDTO {
    CustomerID;
    FirstName;
    LastName;
    PhoneNumber;
    Email;
    Address;
    CustomerType;
    constructor(data) {
        this.CustomerID = data.CustomerID;
        this.FirstName = data.FirstName;
        this.LastName = data.LastName || "";
        this.PhoneNumber = data.PhoneNumber || "";
        this.Email = data.Email || "";
        this.Address = data.Address || "";
        this.CustomerType = data.CustomerType || "Regular";
    }
}

export default CustomerDTO;
