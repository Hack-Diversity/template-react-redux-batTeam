/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const db = require('./db');
const itemRouter = require('./routes/item-router');
const models = require('./models/item-model');


const app = express(); //middleware
const apiPort = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
db.on('error', console.error.bind(console, 'Server connection error:'));

app.get('/', (req, res) => {
    res.send("Welcome to Admin Login");
});

app.use('/api', itemRouter);

//select an item by its id with query stream api?id=#

app.listen(apiPort, () => {
    console.log(`[Hack.Diversity React Template] - Server running on port ${apiPort}`);
});
