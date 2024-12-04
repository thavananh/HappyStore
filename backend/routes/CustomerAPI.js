import CustomerDTO from '../dto/Customer.dto.js'
import CustomersModel from '../models/Customers.model.js'
import { Router } from 'express'

const router = new Router();
const customersModel = new CustomersModel()
router.get('/api/customer/info', async (req, res) => {
    if (req.user) {
        try {
            const findUsers = await customersModel.searchCustomer({
                CustomerID: req.user.CustomerID,
            })
            if (!findUsers) {
                throw new Error('Not Found User')
            }
            console.log(findUsers)
            const customerData = new CustomerDTO(findUsers)
            return res.status(200).send({
                ...customerData,
                createdAt: findUsers.createdAt
            })
        }
        catch (err) {
            console.log(err)
            return res.sendStatus(400)
        }
    }
})

export default router
