// Import modules using ES module syntax
import express from 'express'
import bodyParser from 'body-parser';
import db from './database.js'
import cors from 'cors';

// Initialize the Express app
const app = express();

app.use(express.json())

const mockUsers = [
    {id: 1, username: "Anson", displayName: "Anson"},
    {id: 2, username: "Jack", displayName: "Jack"},
    {id: 3, username: "Duy", displayName: "Duy"}
]

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Database connection configuration


// Connect to the MySQL database
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL database.');
});

app.get("/", (req, res) => {
    res.send("Hello, love to see you")
});

app.get('/api/users', (req, res) => {
    const {query: {filter, value}} = req;
    if (!filter && !value) return res.send(mockUsers)
    if (filter && value) return res.send(mockUsers.filter((user) => user[filter] === value))
})

app.get('/api/users/:id', (req, res) => {
    console.log(req.params)
    const parseId = parseInt(req.params.id)
    console.log(parseId)
    if (isNaN(parseId)) return res.status(400).send({msg: "Bad Request. Invalid Id"}) //400 = bad request
    const findUser = mockUsers.find((user) => user.id === parseId)
    if (!findUser) return res.sendStatus(404)
    return res.send(findUser)
})

app.post('/api/users', (req, res) => {
    console.log(req.body)
    return res.sendStatus(200)
})

app.get('/api/products', (req, res) => {
    res.send([
        {id: 123, name:'Chicken breast', price:'12,99'},
        {id: 123, name:'Chicken breast', price:'12,99'},
        {id: 123, name:'Chicken breast', price:'12,99'},
        {id: 123, name:'Chicken breast', price:'12,99'},
    ])
})

app.get

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
