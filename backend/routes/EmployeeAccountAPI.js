import {Router} from 'express';
import { checkSchema, matchedData, query, validationResult } from 'express-validator'
import {createUserValidationSchema} from '../ultis/userValidationSchema.js'
import { hashPassword } from '../strategies/helper.js'
import EmployeeAccountModel from '../models/EmployeeAccount.model.js'

const router = new Router();
const employeeAccount = new EmployeeAccountModel().getEmployeeAccount()



router.post('/api/users/create', checkSchema(createUserValidationSchema), async (req, res) => {
    const result = validationResult(req)
    console.log(result)
    if (!result.isEmpty()) return res.status(404).send({ errors: result.array() })
    const data = matchedData(result.array())
    data.Password = hashPassword(data.Password)

    try {
        const newUser = await employeeAccount.create(data)
    }
    catch (err) {

    }
})
