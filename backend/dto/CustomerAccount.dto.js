class CustomerAccountDTO {
    UserID;
    UserName;
    PasswordHash;
    Email;
    CustomerID;
    constructor(data) {
        this.UserID = data.UserID;
        this.UserName = data.UserName;
        this.PasswordHash = data.PasswordHash;
        this.Email = data.email;
        this.CustomerID = data.CustomerID;
    }
}

export default CustomerAccountDTO;
