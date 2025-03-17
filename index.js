const express = require('express');
const app = express();
const port = 3000; // Define the port
const cors = require('cors');

// Middleware to parse JSON requests (optional)
app.use(cors());
app.use(express.json());

// Basic route
app.post('/register', (req, res) => {
    console.log(req.body)
    // return res.json({message : "success"});
});

app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
});

app.get('/about', (req, res) => {
    return res.json({message : "success"})
});

app.get('/contact', (req, res) => {
    res.send('This is the Contact page');
});

// Start the server
app.listen(port, '0.0.0.0',  () => {
    console.log(`Server running on http://localhost:${port}`);
});
