const express = require('express');
const { resolve } = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = 3010;
const mongoURL = process.env.mongoURI;

app.use(express.static('static'));

mongoose.connect(mongoURL)
.then(() => console.log('Connected to database'))
.catch(err => console.log('Error connecting to database:',err));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
