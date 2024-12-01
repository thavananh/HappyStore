import CategoriesModel from '../models/Categories.model.js'
import ProductsModel from '../models/Products.model.js'
import CustomerModel from '../models/Customers.model.js'
import OrderModel from '../models/Orders.model.js'
import OrderDetailsModel from '../models/OrderDetails.model.js'
import PaymentModel from '../models/Payment.model.js'
import OrderPayment from '../models/OrderPayment.model.js'
import EmployeeModel from '../models/Employees.model.js'
import CustomerAccountModel from '../models/CustomerAccount.model.js'
import SuppliersModel from '../models/Suppliers.model.js'
import PurchaseOrdersSuppliersModel from '../models/PurchaseOrdersSupplier.model.js'
import PurchaseOrderDetailsSupplierModel from '../models/PurchaseOrderDetailsSupplier.model.js'
import EmployeeAccountModel from '../models/EmployeeAccount.model.js'

const categories = new CategoriesModel()
const products = new ProductsModel()
const customers = new CustomerModel()
const orders = new OrderModel()
const orderDetails = new OrderDetailsModel()
const payment = new PaymentModel()
const orderPayment = new OrderPayment()
const employees = new EmployeeModel()
const customerAccount = new CustomerAccountModel()
const employeeAccount = new EmployeeAccountModel()
const suppliers = new SuppliersModel()
const purchaseOrdersSuppliers = new PurchaseOrdersSuppliersModel()
const purchaseOrderDetailsSupplier = new PurchaseOrderDetailsSupplierModel()

export function syncAll() {
    categories.init()
        .then(() => {
            console.log('Categories initialized');
            return products.init();
        })
        .then(() => {
            console.log('Products initialized');
            return customers.init();
        })
        .then(() => {
            console.log('Customers initialized');
            return orders.init();
        })
        .then(() => {
            console.log('Orders initialized');
            return orderDetails.init();
        })
        .then(() => {
            console.log('OrderDetails initialized');
            return payment.init();
        })
        .then(() => {
            console.log('Payment initialized');
            return orderPayment.init();
        })
        .then(() => {
            console.log('OrderPayment initialized');
            return employees.init();
        })
        .then(() => {
            console.log('Employees initialized');
            return customerAccount.init();
        })
        .then(() => {
            console.log('CustomerAccount initialized');
            return employeeAccount.init();
        })
        .then(() => {
            console.log('EmployeeAccount initialized');
            return suppliers.init();
        })
        .then(() => {
            console.log('Suppliers initialized');
            return purchaseOrdersSuppliers.init();
        })
        .then(() => {
            console.log('PurchaseOrdersSuppliers initialized');
            return purchaseOrderDetailsSupplier.init();
        })
        .then(() => {
            console.log('PurchaseOrderDetailsSupplier initialized');
            console.log('All models initialized');
        })
        .catch((error) => {
            console.error('Error initializing models:', error);
        });
}

