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

    // getAllData() {
    //     {
    //         return {
    //             CustomerID: this.CustomerID,
    //             FirstName: this.FirstName,
    //             LastName: this.LastName,
    //             PhoneNumber: this.PhoneNumber,
    //             Email: this.Email,
    //             Address: this.Address,
    //             CustomerType: this.CustomerType,
    //         }
    //     }
    // }
}

export default CustomerDTO;
