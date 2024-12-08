class EmployeeAccountDTO {
    UserID;
    Username;
    PasswordHash;
    Email;
    EmployeeID;
    constructor(data) {
        this.UserID = data.UserID;
        this.Username = data.Username;
        this.PasswordHash = data.PasswordHash;
        this.Email = data.Email;
    }
}

export default EmployeeAccountDTO;
