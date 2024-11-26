// Import modules using ES module syntax
import express from 'express'
import bodyParser from 'body-parser';
import db from './database.js'
import cors from 'cors';
import { query, validationResult, body } from 'express-validator'

// Initialize the Express app
const app = express();

app.use(express.json())



const mockUsers = [
    {id: 1, username: "Anson", displayName: "Anson"},
    {id: 2, username: "Jack", displayName: "Jack"},
    {id: 3, username: "Duy", displayName: "Duy"},
    {id: 4, username: "Mia", displayName: "Mia"},
    {id: 5, username: "Liam", displayName: "Liam"},
    {id: 6, username: "Emma", displayName: "Emma"},
    {id: 7, username: "Noah", displayName: "Noah"},
    {id: 8, username: "Sophia", displayName: "Sophia"},
    {id: 9, username: "Olivia", displayName: "Olivia"},
    {id: 10, username: "Lucas", displayName: "Lucas"},
    {id: 11, username: "Ethan", displayName: "Ethan"},
    {id: 12, username: "Ava", displayName: "Ava"},
    {id: 13, username: "Harper", displayName: "Harper"}
]

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
// Database connection configuration

const loggingMiddleWare = (req, res, next) => {
    console.log(`${req.method} - ${req.url}`)
    next()
}

const resolveIndexByUserId = (req, res, next) => {
    const {
        body, params: {id}
    } = req
    const parsedId = parseInt(id)
    if (isNaN(parsedId)) return res.sendStatus(400)
    const findUserIndex = mockUsers.findIndex((user) => user.id === parsedId)
    if (findUserIndex === -1) return res.sendStatus(404)
    req.findUserIndex = findUserIndex
    next()
}

// Connect to the MySQL database
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL database.');
});

app.get("/",(req, res, next) => {
    console.log("Base URL")
    next()
}, (req, res) => {
    res.send("Hello, love to see you")
});

app.get('/api/users', query('filter').isString().notEmpty().isLength({min: 3, max: 10}).withMessage('Must be at least 3-10 char')
    , (req, res) => {
    const result = validationResult(req);
    console.log(result)
    const {query: {filter, value}} = req;
    if (filter && value) return res.send(mockUsers.filter((user) => user[filter].includes(value)));
    return res.send(mockUsers)
})

app.get('/api/users/:id', resolveIndexByUserId, loggingMiddleWare, (req, res) => {
    const {findUserIndex} = req
    return res.send(mockUsers[findUserIndex])
})

app.post('/api/users', body('username')
        .notEmpty().withMessage('Not be empty')
        .isLength({min: 5, max: 32}).withMessage('Username must be at least 5-32 char')
        .isString().withMessage('Username must be a string')
    , loggingMiddleWare,(req, res) => {
    const result = validationResult(req);
    console.log(result);
    const {body} = req
    console.log(body)
    const newUser = {id: mockUsers[mockUsers.length - 1].id+1, ...body}
    mockUsers.push(newUser)
    return res.status(201).send(newUser)
})

app.get('/api/products', (req, res) => {
    res.send([
        {id: 123, name:'Chicken breast', price:'12,99'},
        {id: 123, name:'Chicken breast', price:'12,99'},
        {id: 123, name:'Chicken breast', price:'12,99'},
        {id: 123, name:'Chicken breast', price:'12,99'},
    ])
})

app.put('/api/users/:id', resolveIndexByUserId, loggingMiddleWare, (req, res) => {
    const {body, findUserIndex} = req
    mockUsers[findUserIndex] = {findUserIndex, ...body}
    return res.sendStatus(200)
})

app.patch('/api/users/:id', resolveIndexByUserId, loggingMiddleWare,(req, res) => {
    const {body, findUserIndex} = req
    mockUsers[findUserIndex] = {...mockUsers[findUserIndex], ...body}
    return res.sendStatus(200)
})

app.delete("/api/users/:id", resolveIndexByUserId, loggingMiddleWare,(req, res) => {
    const {findUserIndex} = req
    mockUsers.splice(findUserIndex, 1)
    return res.sendStatus(200)
})

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
