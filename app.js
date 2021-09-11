const express = require('express');
const dotenv = require('dotenv');

const app = express();
/*
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/employees', (req, res) => {
    res.send('Employees');
});
*/

const connectDb = require('./config/db');

// Load config
dotenv.config({ path: './config/config.env' });

connectDb();

app.listen(3000);

console.log('Listening on port 3000');


