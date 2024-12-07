import CustomerDTO from '../dto/Customer.dto.js'
import CustomersModel from '../models/Customers.model.js'
import { Router } from 'express'

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

router.post('/api/customer/info/update', async (req, res) => {
    if (req.user) {
        try {
            console.log(`Starting update for ${req.body.CustomerID}`)
            const startQuery = await customersModel.sequelize.query('CALL customer_api_info_update(:CustomerID, :FirstName, :LastName, :PhoneNumber, :Email, :Address, :CustomerType, :Username)', {
                replacements: {
                    CustomerID: req.body.CustomerID,
                    FirstName: req.body.FirstName,
                    LastName: req.body.LastName,
                    PhoneNumber: req.body.PhoneNumber,
                    Email: req.body.Email,
                    Address: req.body.Address,
                    CustomerType: req.body.CustomerType,
                    Username: req.body.Username,
                },
            })
            console.log(`Update customer ${req.body.CustomerID} successfully`)
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
