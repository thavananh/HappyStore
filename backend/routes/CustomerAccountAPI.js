import {Router} from 'express';
import { checkSchema, matchedData, query, validationResult } from 'express-validator'
import {createUserValidationSchema} from '../ultis/customerValidationSchema.js'
import { hashPassword } from '../strategies/helper.js'
import CustomerAccountDTO from '../dto/CustomerAccount.dto.js'
import CustomerDTO from '../dto/Customer.dto.js'
import CustomersModel from '../models/Customers.model.js'
import CustomerAccountModel from '../models/CustomerAccount.model.js'

const router = new Router();
const customerAccount = new CustomerAccountModel().getCustomerAccount()
import { v4 as uuidv4 } from 'uuid';

const customersModel = new CustomersModel().getCustomers()
const customerAccountModel = new CustomerAccountModel().getCustomerAccount()

router.post('/api/customer_account/create', checkSchema(createUserValidationSchema), async (req, res) => {
    const result = validationResult(req)
    if (!result.isEmpty()) return res.status(400).send({ errors: result.array() })
    const data = matchedData(req)
    data.Password = hashPassword(data.Password)
    if (!data.CustomerID) {
        data.CustomerID = uuidv4()
        const customerData = new CustomerDTO(
            {
                CustomerID: data.CustomerID,
                FirstName: data.FirstName,
                LastName: data.LastName,
                PhoneNumber: data.PhoneNumber,
                Email: data.Email,
                Address: data.Address || "",
                CustomerType:data.CustomerType || "Regular"
            }
        )
        try {
            customersModel.create(customerData)
            console.log(`Create new customer successfully`)
        }
        catch (err) {
            console.log(`Error while trying create new Customer ${err}`)
            return res.sendStatus(400)
        }
    }
    console.log(data.Email)
    const customerAccountData = new CustomerAccountDTO(
        {
            UserID: uuidv4(),
            Username: data.Username,
            PasswordHash: data.Password,
            Email: data.Email,
            PhoneNumber: data.PhoneNumber,
            CustomerID: data.CustomerID
        }
    )
    console.log(customerAccountData)
    try {
        customerAccountModel.create(customerAccountData)
        console.log(`Create new customer account successfully`)
        return res.status(201).send({msg: "success"})
    }
    catch (err) {
        console.log(`Error while trying create new CustomerAccount ${err}`)
        return res.sendStatus(400)
    }
})

export default router
