import {Router} from 'express';
import { checkSchema, matchedData, query, validationResult } from 'express-validator'
import { hashPassword } from '../strategies/helper.js'
import EmployeeAccountModel from '../models/EmployeeAccount.model.js'
import { createEmployeeAccountValidationSchema } from '../ultis/employeeValidationSchema.js'
import { v4 as uuidv4 } from 'uuid'
import EmployeeDTO from '../dto/Employee.dto.js'
import EmployeesModel from '../models/Employees.model.js'
import EmployeeAccountDTO from '../dto/EmployeeAccount.dto.js'
import passport from 'passport'
import { changePasswordSchema } from '../ultis/changePasswordSchema.js'

const router = new Router();
const employeeModel = new EmployeesModel().getEmployees()
const employeeAccountModel = new EmployeeAccountModel().getEmployeeAccount()


router.post('/api/employee_account/create', checkSchema(createEmployeeAccountValidationSchema), async (req, res) => {
    const result = validationResult(req)
    if (!result.isEmpty()) return res.status(400).send({ errors: result.array() })
    const data = matchedData(req)
    data.Password = hashPassword(data.Password)
    if (!data.EmployeeID) {
        data.EmployeeID = uuidv4()
        const employeeData = new EmployeeDTO(
            {
                EmployeeID: data.EmployeeID,
                FirstName: data.FirstName,
                LastName: data.LastName,
                PhoneNumber: data.PhoneNumber,
                Email: data.Email,
                Address: data.Address || "",
                Position: data.Position,
                Status: data.Status,
                Role: data.Role || "User",
            }
        )
        try {
            employeeModel.create(employeeData)
            console.log(`Create new customer successfully`)
        }
        catch (err) {
            console.log(`Error while trying create new Customer ${err}`)
            return res.sendStatus(400)
        }
    }
    const employeeAccountData = new EmployeeAccountDTO(
        {
            UserID: uuidv4(),
            Username: data.Username,
            PasswordHash: data.Password,
            Email: data.Email,
            PhoneNumber: data.PhoneNumber,
            EmployeeID: data.EmployeeID
        }
    )
    try {
        employeeAccountModel.create(employeeAccountData)
        console.log(`Create new employee account successfully`)
        return res.status(201).send({msg: "success"})
    }
    catch (err) {
        console.log(`Error while trying create new employee account ${err}`)
        return res.sendStatus(400)
    }
})


router.post('/api/employee_account/auth', passport.authenticate('local-employee-sign-in'), (req, res) => {
    res.sendStatus(200)
})

router.get('/api/employee_account/status', (req, res) => {
    if (req.user) {
        console.log(req.session.id)
        return res.sendStatus(200)
    }
    else {
        return res.sendStatus(401)
    }
})

router.post('/api/employee_account/change_password',checkSchema(changePasswordSchema), async (req, res) => {
    if (req.user) {
        try {
            const result = validationResult(req)
            if (!result.isEmpty()) return res.status(400).send({ errors: result.array() })
            const data = matchedData(req)
            console.log(req.body)
            const startQuery = await employeeAccountModel.sequelize.query('CALL employeeaccount_api_password_update(:EmployeeID, :PasswordHash)', {
                replacements: {
                    EmployeeID: req.body.EmployeeID,
                    PasswordHash: hashPassword(req.body.Password),
                }
            });
            return res.sendStatus(200)
        }
        catch (e) {
            console.log(e)
            return res.sendStatus(400)
        }
    }
    else {
        return res.sendStatus(401)
    }
})

router.post('/api/employee_account/logout', async (req, res) => {
    try {
        // Đăng xuất người dùng khỏi Passport
        req.logout((err) => {
            if (err) {
                return res.status(500).send('Failed to logout');
            }
            // Xóa session khỏi cơ sở dữ liệu
            req.session.destroy((err) => {
                if (err) {
                    return res.status(500).send('Failed to destroy session in DB');
                }
                res.sendStatus(200); // Đăng xuất thành công
            });
        });
    } catch (e) {
        console.log(e);
        res.status(500).send('Error during logout');
    }
});

export default router;
