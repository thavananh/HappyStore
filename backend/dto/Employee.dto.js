class EmployeeDTO {
    EmployeeID = "";
    EmployeeName = "";
    FirstName = "";
    LastName = "";
    PhoneNumber = "";
    Email = "";
    Address = "";
    Position = "";
    Status = "";
    Role = "User";

    constructor(data = {}) {
        this.EmployeeID = data.EmployeeID || this.EmployeeID;
        this.EmployeeName = data.EmployeeName || this.EmployeeName;
        this.FirstName = data.FirstName || this.FirstName;
        this.LastName = data.LastName || this.LastName;
        this.PhoneNumber = data.PhoneNumber || this.PhoneNumber;
        this.Email = data.Email || this.Email;
        this.Address = data.Address || this.Address;
        this.Position = data.Position || this.Position;
        this.Status = data.Status || this.Status;
        this.Role = data.Role || this.Role;
    }
}

export default EmployeeDTO;
