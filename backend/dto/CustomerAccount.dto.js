class CustomerAccountDTO {
    UserID;
    Username;
    PasswordHash;
    Email;
    PhoneNumber;
    CustomerID;
    constructor(data) {
        this.UserID = data.UserID;
        this.Username = data.UserName;
        this.PasswordHash = data.PasswordHash;
        this.Email = data.Email;
        this.PhoneNumber = data.PhoneNumber;
        this.CustomerID = data.CustomerID;
    }
}

export default CustomerAccountDTO;
