import Database from '../database.js';
import EmployeesModel from './Employees.model.js'
import EmployeeAccountModel from './EmployeeAccount.model.js'
import EmployeeDTO from '../dto/Employee.dto.js'
import { v4 as uuidv4 } from 'uuid'
import EmployeeAccountDTO from '../dto/EmployeeAccount.dto.js'
import {hashPassword} from '../strategies/helper.js'
import InitializationStatusModel from './InitializationStatus.model.js'

class InitData {
    constructor(sequelize) {
        const db = new Database()
        this.sequelize = db.getSequelize()
    }

    createAdmin() {
        try {
            const employeeAccountModel = new EmployeeAccountModel().getEmployeeAccount();
            const employeeModel = new EmployeesModel().getEmployees();
            const employeeID = uuidv4();
            const employeeData = new EmployeeDTO(
                {
                    EmployeeID: employeeID,
                    FirstName: "Admin",
                    LastName: "Admin",
                    PhoneNumber: "0123456789",
                    Email: "Admin@support.com",
                    Address: "ĐH Sư Phạm 280 An Dương Vương, Quận 5",
                    Position: "Admin",
                    Status: "Working",
                    Role: "Admin",
                }
            )
            console.log(employeeData)
            employeeModel.create(employeeData)
            const employeeAccountData = new EmployeeAccountDTO(
                {
                    UserID: uuidv4(),
                    Username: "admin123",
                    PasswordHash: hashPassword("admin123"),
                    Email: "Admin@support.com",
                    PhoneNumber: "0123456789",
                    EmployeeID: employeeID
                }
            )
            employeeAccountModel.create(employeeAccountData)
        }
        catch (e) {
            console.log(`Admin Account Already Exists`)
        }
    }
}

// Usage
export default InitData
