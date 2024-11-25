// Import modules using ES module syntax
import express from 'express'
import bodyParser from 'body-parser';
import db from './database.js'
import cors from 'cors';

// Initialize the Express app
const app = express();

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
    res.send([
        {id: 1, username: "Anson", displayName: "Anson"},
        {id: 2, username: "Jack", displayName: "Jack"},
        {id: 3, username: "Duy", displayName: "Duy"}
    ])
})

app.get('/api/users/:id', (req, res) => {

})

app.get('/api/products', (req, res) => {
    res.send([
        {id: 123, name:'Chicken breast', price:'12,99'},
        {id: 123, name:'Chicken breast', price:'12,99'},
        {id: 123, name:'Chicken breast', price:'12,99'},
        {id: 123, name:'Chicken breast', price:'12,99'},
    ])
})

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
