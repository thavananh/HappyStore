import Database from '../database.js';
class ProcedureCreator {
    constructor(sequelize) {
        const db = new Database()
        this.sequelize = db.getSequelize()
    }

    createProcedures() {
        const procedures = [
            `
        CREATE PROCEDURE customer_api_info (IN CustomerID VARCHAR(36))
        BEGIN
          SELECT c.*, ca.Username
          FROM customers c
          JOIN customeraccount ca ON c.CustomerID = ca.CustomerID
          WHERE c.CustomerID = CustomerID;
        END;
      `,
            `
        CREATE PROCEDURE customer_api_info_update(
          IN CustomerID VARCHAR(36),
          IN FirstName VARCHAR(100),
          IN LastName VARCHAR(100),
          IN PhoneNumber VARCHAR(20),
          IN Email VARCHAR(100),
          IN Address TEXT,
          IN CustomerType VARCHAR(50),
          IN Username VARCHAR(255)
        )
        BEGIN
          -- Update the customers table
          UPDATE customers c
          SET c.FirstName = FirstName,
              c.LastName = LastName,
              c.PhoneNumber = PhoneNumber,
              c.Email = Email,
              c.Address = Address,
              c.CustomerType = CustomerType
          WHERE c.CustomerID = CustomerID;

          -- Update the customeraccount table
          UPDATE customeraccount cc
          SET cc.Username = Username
          WHERE cc.CustomerID = CustomerID;
        END;
      `,
            `
        CREATE PROCEDURE customer_api_info (IN CustomerID VARCHAR(36))
        BEGIN
          SELECT c.*, ca.Username
          FROM customers c
          JOIN customeraccount ca ON c.CustomerID = ca.CustomerID
          WHERE c.CustomerID = CustomerID;
        END;
      `,
            `
        CREATE PROCEDURE customeraccount_api_password_update (
          IN CustomerID VARCHAR(36),
          In PasswordHash VARCHAR(255)
        )
        BEGIN
          UPDATE customeraccount ca
          SET ca.PasswordHash = PasswordHash
          WHERE ca.CustomerID = CustomerID;
        END;
      `,
            `
        CREATE PROCEDURE employee_api_info (IN EmployeeID VARCHAR(36))
        BEGIN
          SELECT e.*, ea.Username
          FROM employees e
          JOIN employeeaccount ea ON e.EmployeeID = ea.EmployeeID
          WHERE e.EmployeeID = EmployeeID;
        END;
      `,
            `
        CREATE PROCEDURE employeeaccount_api_password_update (
          IN EmployeeID VARCHAR(36),
          In PasswordHash VARCHAR(255)
        )
        BEGIN
          UPDATE employeeaccount ea
          SET ea.PasswordHash = PasswordHash
          WHERE ea.EmployeeID = EmployeeID;
        END;
      `,
            `
        CREATE PROCEDURE employee_api_info_update(
          IN EmployeeID VARCHAR(36),
          IN FirstName VARCHAR(100),
          IN LastName VARCHAR(100),
          IN PhoneNumber VARCHAR(20),
          IN Email VARCHAR(100),
          IN Address TEXT,
          IN Position VARCHAR(50),
          IN Status VARCHAR(50),
          IN Role VARCHAR(50),
          IN Username VARCHAR(255)
        )
        BEGIN
          -- Update the employees table
          UPDATE employees e
          SET e.FirstName = FirstName,
              e.LastName = LastName,
              e.PhoneNumber = PhoneNumber,
              e.Email = Email,
              e.Address = Address,
              e.Position = Position,
              e.Status = Status,
              e.Role = Role
          WHERE e.EmployeeID = EmployeeID;

          -- Update the employeeaccount table
          UPDATE employeeaccount ea
          SET ea.Username = Username
          WHERE ea.EmployeeID = EmployeeID;
        END;
      `,
        ];

        procedures.forEach((procedure) => {
            this.sequelize.query(procedure, {
                type: this.sequelize.QueryTypes.RAW,
            })
                .then(() => {
                    console.log(`Procedure created: ${procedure}`);
                })
                .catch((error) => {
                    console.error(`Error creating procedure: ${error}`);
                });
        });
    }
}

// Usage
export default ProcedureCreator
