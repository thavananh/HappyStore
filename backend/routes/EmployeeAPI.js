import { Router } from 'express'
import EmployeeDTO from '../dto/Employee.dto.js'
import EmployeesModel from '../models/Employees.model.js'

const router = new Router();
const employeeModel = new EmployeesModel()


router.get('/api/employee/info', async (req, res) => {
    if (req.user) {
        try {
            const [findUsers] = await customersModel.sequelize.query(
                'CALL customer_api_info(:EmployeeID)',
                {
                    replacements: { EmployeeID: req.user.EmployeeID },
                }
            );

            // console.log(findUsers)
            if (!findUsers) {
                throw new Error('Not Found User')
            }
            const employeeData = new EmployeeDTO(findUsers)
            console.log(employeeData)
            return res.status(200).send({
                ...employeeData,
                Username: findUsers.Username,
                createdAt: findUsers.createdAt
            })
        }
        catch (err) {
            console.log(err)
            return res.sendStatus(400)
        }
    }
    else {
        return res.sendStatus(400)
    }
})

router.post('/api/employee/info/update', async (req, res) => {
    if (req.user) {
        try {
            console.log(`Starting update for ${req.body.EmployeeID}`)
            const startQuery = await employeeModel.sequelize.query('CALL employee_api_info_update(:EmployeeID, :FirstName, :LastName, :PhoneNumber, :Email, :Address, :Position, :Status, :Role, :Username)', {
                replacements: {
                    EmployeeID: req.body.EmployeeID,
                    FirstName: req.body.FirstName,
                    LastName: req.body.LastName,
                    PhoneNumber: req.body.PhoneNumber,
                    Email: req.body.Email,
                    Address: req.body.Address,
                    Position: req.body.Position,
                    Status: req.body.Status,
                    Role: req.body.Role,
                    Username: req.body.Username,
                },
            })
            console.log(`Update employee ${req.body.EmployeeID} successfully`)
            return res.sendStatus(200)
        }
        catch (err) {
            console.log(err)
            return res.sendStatus(400)
        }
    }
    else {
        return res.sendStatus(400)
    }
})


export default router
