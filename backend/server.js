// Import modules using ES module syntax
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { cookie } from 'express-validator'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import passport from 'passport'
import './strategies/local-stategies.js'
import Database from './database.js'
import { syncAll } from './ultis/syncAll.js'
import customerAccountAPI from './routes/CustomerAccountAPI.js'
import connectSessionSequelize from 'connect-session-sequelize';
import CustomerAPI from './routes/CustomerAPI.js'
import UploadAPI from './routes/CustomerUploadAPI.js'

// Initialize the Express app
const app = express()


const db = new Database()
const sequelize = db.getSequelize()
db.connect().then(() => {
    console.log('Connected')
    syncAll()
})

// Initialize SequelizeStore
const SequelizeStore = connectSessionSequelize(session.Store);

const store = new SequelizeStore({
    db: sequelize,
    tableName: 'Sessions', // Optional: specify table name
});

store.sync()
    .then(() => {
        console.log('Session table initialized successfully.');
    })
    .catch((err) => {
        console.error('Failed to initialized session table:', err);
    });

// Middleware setup
app.use(cookieParser('06ccd1df-0786-4475-a646-f213253cf563'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    session({
        secret: '7afd85a0-1398-442f-b96d-4479060924f3',
        saveUninitialized: false,
        resave: false,
        cookie: {
            maxAge: 60000 * 60, // 1 giờ
            secure: false // Đặt thành true nếu bạn sử dụng HTTPS
        },
        store: new SequelizeStore({
            db: sequelize, // Pass Sequelize instance
        })
    })
)


app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(passport.session())
app.use(customerAccountAPI)
app.use(CustomerAPI)
app.use(UploadAPI)

// Middleware setup

// Database connection configuration

// Connect to the MySQL database

app.get('/', (req, res) => {
    // req.session.visited = true
    res.send('Hello, love to see you')
})

// Start the server
const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
