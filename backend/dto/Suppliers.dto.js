class SuppliersDTO {
    SupplierID;
    SupplierName;
    ContactName;
    PhoneNumber;
    Email;
    Address;

    constructor(data) {
        this.SupplierID = data.SupplierID;
        this.SupplierName = data.SupplierName;
        this.ContactName = data.ContactName;
        this.PhoneNumber = data.PhoneNumber;
        this.Email = data.email;
        this.Address = data.Address;
    }
}
