import fs from 'fs';
import CategoriesModel from '../models/Categories.model.js'
import ProductsModel from '../models/Products.model.js'
import CustomerModel from '../models/Customers.model.js'
import OrderModel from '../models/Orders.model.js'
import OrderDetailsModel from '../models/OrderDetails.model.js'
import PaymentModel from '../models/Payment.model.js'
import OrderPayment from '../models/OrderPayment.model.js'
import EmployeeModel from '../models/Employees.model.js'
import CustomerAccountModel from '../models/CustomerAccount.model.js'
import EmployeeAccountModel from '../models/EmployeeAccount.model.js'
import SuppliersModel from '../models/Suppliers.model.js'
import PurchaseOrdersSuppliersModel from '../models/PurchaseOrdersSupplier.model.js'
import PurchaseOrderDetailsSupplierModel from '../models/PurchaseOrderDetailsSupplier.model.js'
import ProcedureCreator from '../models/ProcedureCreator.js'
import InitData from '../models/InitData.js'
import Database from '../database.js'

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

const firstRunFile = './first_run.json';

// Kiểm tra nếu là lần đầu chạy
function isFirstRun() {
    return new Promise((resolve, reject) => {
        fs.access(firstRunFile, fs.constants.F_OK, (err) => {
            if (err) {
                // Nếu tệp không tồn tại, đây là lần đầu chạy
                const initialData = {
                    firstRun: true,
                    createdAt: new Date().toISOString()
                };

                fs.writeFile(firstRunFile, JSON.stringify(initialData, null, 2), (writeErr) => {
                    if (writeErr) {
                        reject(writeErr);
                    } else {
                        resolve(true); // Chạy lần đầu
                    }
                });
            } else {
                resolve(false); // Không phải lần đầu
            }
        });
    });
}

export function syncAll() {
    isFirstRun()
        .then((firstRun) => {
            if (firstRun) {
                console.log('This is the first run, initializing data...');
            } else {
                console.log('Not the first run, skipping initial data setup.');
            }

            // Tiến hành khởi tạo tất cả các mô hình
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

                    console.log(firstRun)
                    if (firstRun) {
                        console.log("Khởi tạo admin")
                        // Nếu đây là lần đầu chạy, tạo admin và dữ liệu khởi tạo
                        const initData = new InitData();
                        initData.createAdmin();
                    }

                    const procedureCreator = new ProcedureCreator();
                    procedureCreator.createProcedures();


                })
                .catch((error) => {
                    console.error('Error initializing models:', error);
                });
        })
        .catch((error) => {
            console.error('Error checking first run:', error);
        });
}
