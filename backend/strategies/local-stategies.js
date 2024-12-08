import passport from 'passport'
import LocalStrategy from 'passport-local'
import {comparePassword} from './helper.js'
import CustomerAccountModel from '../models/CustomerAccount.model.js'
import EmployeeAccountModel from '../models/EmployeeAccount.model.js'

const customerAccountInstance = new CustomerAccountModel()

const employeeAccountInstance = new EmployeeAccountModel()

passport.serializeUser((user, done) => {
    console.log("Inside serializeUser")
    // done(null, user.UserID)
    done(null, user)
})

passport.deserializeUser(async(id, done) => {
    console.log("Inside deserializeUser")
    console.log(`Deserialized UserID: ${id}`)
    try {
        console.log("Deserialize User")
        const findUser = await customerAccountInstance.searchCustomerAccount({UserID: id})
        if (!findUser) throw new Error('User not found')
        done(null, findUser)
    } catch (err) {
        done(err, null)
    }
})

passport.use('local-customer-sign-in', new LocalStrategy(
    async function (username, password, done) {
        console.log(`Input Username: ${ username }`)
        console.log(`Input Password: ${ password }`)
        try {
            const findUser = await customerAccountInstance.searchCustomerAccount({Username: username})
            if (!findUser) throw new Error('User not found')
            console.log(`Get User: ${findUser}`)
            console.log(`Get Username: ${findUser.Username}`)
            console.log(`Get password: ${findUser.PasswordHash}`)
            if (!comparePassword(password, findUser.PasswordHash)) {
                throw new Error('Invalid credentials')
            }
            console.log(`Xác thực thành công`)
            done(null, findUser)
        }
        catch (err) {
            done(err, null)
        }
    }
))

passport.use('local-employee-sign-in', new LocalStrategy(
    async function (username, password, done) {
        console.log(`Input Username: ${ username }`)
        console.log(`Input Password: ${ password }`)
        try {
            const findUser = await employeeAccountInstance.searchEmployeeAccount({Username: username})
            if (!findUser) throw new Error('User not found')
            console.log(`Get User: ${findUser}`)
            console.log(`Get Username: ${findUser.Username}`)
            console.log(`Get password: ${findUser.PasswordHash}`)
            if (!comparePassword(password, findUser.PasswordHash)) {
                throw new Error('Invalid credentials')
            }
            console.log(`Xác thực thành công`)
            done(null, findUser)
        }
        catch (err) {
            done(err, null)
        }
    }
))

export default passport
