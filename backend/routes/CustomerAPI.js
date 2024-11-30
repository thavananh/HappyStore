import {Router} from 'express';
import { checkSchema, matchedData, query, validationResult } from 'express-validator'
import {createUserValidationSchema} from '../ultis/userValidationSchema.js'
import { hashPassword } from '../strategies/helper.js'
import EmployeeAccountModel from '../models/EmployeeAccount.model.js'
import CustomerAccountModel from '../models/CustomerAccount.model.js'

const router = new Router();
const employeeAccount = new EmployeeAccountModel().getEmployeeAccount()
import { v4 as uuidv4 } from 'uuid';


router.post('/api/customer/create', checkSchema(createUserValidationSchema), async (req, res) => {
    const result = validationResult(req)
    console.log(result)
    if (!result.isEmpty()) return res.status(404).send({ errors: result.array() })
    const data = matchedData(result.array())
    data.Password = hashPassword(data.Password)
    data.UserID = uuidv4()
    try {
        const newCustomerAccount = new CustomerAccountModel().getCustomerAccount()
    }
    catch (err) {

    }
})
