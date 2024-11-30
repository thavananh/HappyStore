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
        this.LastName = data.LastName;
        this.PhoneNumber = data.PhoneNumber;
        this.Email = data.email;
        this.Address = data.Address;
        this.CustomerType = data.CustomerType;
    }
}

export default CustomerDTO;
