// Import modules using ES module syntax
import express from 'express'
import bodyParser from 'body-parser'
import sequelize from './database.js'
import cors from 'cors'
import userRouter from './routes/UserAccount.route.js'
import productRouter from './routes/Product.route.js'
import { cookie } from 'express-validator'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import { mockUsers } from './constant.js'
import passport from 'passport'
import './strategies/local-stategies.js'



// Initialize the Express app
const app = express()

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.')
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error)
    })

sequelize.sync({ force: false }) // force: true sẽ xóa bảng cũ và tạo lại bảng mới
    .then(() => {
        console.log('userAccount table has been created successfully!');
    })
    .catch((error) => {
        console.error('Error syncing the database:', error);
    });

app.use(express.json())
app.use(cookieParser('hello_world'))
app.use(
    session({
        secret: 'duycutevl',
        saveUninitialized: false,
        resave: false,
        cookie: {
            maxAge: 60000 * 60,
        },
    }),
)
app.use(cors())
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(passport.session())
app.use(userRouter)
app.use(productRouter)

// Middleware setup

// Database connection configuration

// Connect to the MySQL database

app.get('/', (req, res) => {
    req.session.visited = true
    res.send('Hello, love to see you')
})

// app.post('/api/auth', (req, res) => {
//     const {body:{username, password}} = req
//     const findUser = mockUsers.find(user => user.username === username)
//     if (!findUser || findUser.password !== password) {
//         return res.status(401).send('BAD CREDENTIALS')
//     }
//     req.session.user = findUser
//     return res.status(200).send(findUser)
// })
//
// app.get('/api/auth/status', (req, res) => {
//     console.log(req.session)
//     return req.session.user ? res.status(200).send(req.session.user) : res.status(404).send({msg: "Not Authorized"})
// })
//
// app.post('/api/auth/cart', (req, res) => {
//     if (!req.session.user) return res.status(401).send('BAD CREDENTIALS')
//     console.log(req.session)
//     const {body: item} = req
//     const {cart} = req.session
//     console.log(cart)
//     if (cart) {
//         cart.push(item)
//     }
//     else {
//         req.session.cart = [item]
//     }
//     return res.status(201).send(item)
// })
//
// app.get('/api/auth/cart', (req, res) => {
//     if (!req.session.user) return res.status(401).send('BAD CREDENTIALS');
//     if (req.session.cart) {return res.status(200).send(req.session.cart)}
//     else {return res.status(200).send([])}
// })

app.post('/api/auth', passport.authenticate('local'), (req, res) => {
    console.log("Gọi auth user")
    res.sendStatus(200)
})

app.get('/api/auth/status', (req, res) => {
    console.log(`Gọi auth/status endpoint`)
    console.log(req.user)
    return req.user ? res.status(200).send(req.user) : res.status(401).send('Not authorized')
})

app.post('/api/auth/logout', (req, res) => {
    console.log('Đang ở /api/auth/logout')
    if (!req.user) return res.status(401)
    req.logout((err) => {
        if (err) return res.sendStatus(400)
        return res.sendStatus(200)
    })
})

// Start the server
const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
