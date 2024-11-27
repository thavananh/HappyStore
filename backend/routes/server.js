// Import modules using ES module syntax
import express from 'express'
import bodyParser from 'body-parser'
import db from './database.js'
import cors from 'cors'
import userRouter from './UserAccount.route.js'
import productRouter from './Product.route.js'
import { cookie } from 'express-validator'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import { mockUsers } from './constant.js'
import passport from 'passport'
import "../strategies/local-stategies.js"

// Initialize the Express app
const app = express()

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
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack)
        return
    }
    console.log('Connected to MySQL database.')
})

app.get('/', (req, res) => {
    console.log(req.session)
    console.log(req.session.id)
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

})

// Start the server
const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})


