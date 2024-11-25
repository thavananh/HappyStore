// Import modules using ES module syntax
import express from 'express';
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
    res.send({msg:"Hello"})
})

app.get('/users_account', (req, res) => {
    db.query('SELECT * FROM UserAccount', (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
});

app.post('/users_account', (req, res) => {
    const { name, email } = req.body;
    db.query('INSERT INTO UserAccount (User, email) VALUES (?, ?)', [name, email], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).json({ id: results.insertId });
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
