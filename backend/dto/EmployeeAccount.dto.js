class EmployeeAccountDTO {
    UserID;
    Username;
    PasswordHash;
    Email;
    EmployeeID;
    constructor(data) {
        this.UserID = data.UserID;
        this.Username = data.UserName;
        this.PasswordHash = data.PasswordHash;
        this.Email = data.email;
    }
}

export default EmployeeAccountDTO;
