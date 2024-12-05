import CustomerDTO from '../dto/Customer.dto.js'
import CustomersModel from '../models/Customers.model.js'
import { Router } from 'express'
import { readUsedSize } from 'chart.js/helpers'

const router = new Router();
const customersModel = new CustomersModel()
router.get('/api/customer/info', async (req, res) => {
    if (req.user) {
        try {
            const [findUsers] = await customersModel.sequelize.query(
                'CALL customer_api_info(:CustomerID)',
                {
                    replacements: { CustomerID: req.user.CustomerID },
                }
            );

            // console.log(findUsers)
            if (!findUsers) {
                throw new Error('Not Found User')
            }
            const customerData = new CustomerDTO(findUsers)
            console.log(customerData)
            return res.status(200).send({
                ...customerData,
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

export default router
