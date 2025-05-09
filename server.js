const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log('Connected to the database');
  }
});

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('This is the home page');
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});