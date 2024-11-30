class EmployeeDTO {
    EmployeeID;
    EmployeeName;
    FirstName;
    LastName;
    PhoneNumber;
    Email;
    Position;
    Status;
    Role

    constructor(data) {
        this.EmployeeID = data.EmployeeID;
        this.EmployeeName = data.EmployeeName;
        this.FirstName = data.FirstName;
        this.LastName = data.LastName;
        this.PhoneNumber = data.PhoneNumber;
        this.Email = data.email;
        this.Position = data.Position;
        this.Status = data.Status;
        this.Role = data.Role;
    }
}


export default EmployeeDTO;
