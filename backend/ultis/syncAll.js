import CategoriesModel from '../models/Categories.model.js'
import ProductsModel from '../models/Products.model.js'
import CustomerModel from '../models/Customers.model.js'
import OrderModel from '../models/Orders.model.js'
import OrderDetailsModel from '../models/OrderDetails.model.js'
import PaymentModel from '../models/Payment.model.js'
import OrderPayment from '../models/OrderPayment.model.js'
import EmployeeModel from '../models/Employees.model.js'
import UserAccountModel from '../models/UserAccount.model.js'
import SuppliersModel from '../models/Suppliers.model.js'
import PurchaseOrdersSuppliersModel from '../models/PurchaseOrdersSupplier.model.js'
import PurchaseOrderDetailsSupplierModel from '../models/PurchaseOrderDetailsSupplier.model.js'

const categories = new CategoriesModel()
const products = new ProductsModel()
const customers = new CustomerModel()
const orders = new OrderModel()
const orderDetails = new OrderDetailsModel()
const payment = new PaymentModel()
const orderPayment = new OrderPayment()
const employees = new EmployeeModel()
const userAccount = new UserAccountModel()
const suppliers = new SuppliersModel()
const purchaseOrdersSuppliers = new PurchaseOrdersSuppliersModel()
const purchaseOrderDetailsSupplier = new PurchaseOrderDetailsSupplierModel()

export function syncAll() {
    Promise.all([
        categories.init(),
        products.init(),
        customers.init(),
        orders.init(),
        orderDetails.init(),
        payment.init(),
        orderPayment.init(),
        employees.init(),
        userAccount.init(),
        suppliers.init(),
        purchaseOrdersSuppliers.init(),
        purchaseOrderDetailsSupplier.init()
    ])
        .then(() => {
            console.log('All models initialized')
        })
        .catch((error) => {
            console.error('Error initializing models:', error)
        })
}


