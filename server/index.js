/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
<<<<<<< HEAD
const path = require('path');

const db = require('./db');
const itemRouter = require('./routes/item-router');
const models = require('./models/item-model');


const app = express(); //middleware
=======

const db = require('./db');
const itemRouter = require('./routes/item-router');

const app = express();
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
const apiPort = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
<<<<<<< HEAD
db.on('error', console.error.bind(console, 'Server connection error:'));

app.get('/', (req, res) => {
    res.send("Welcome to Admin Login");
=======

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send('Hello World!');
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
});

app.use('/api', itemRouter);

<<<<<<< HEAD
//select an item by its id with query stream api?id=#

=======
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
app.listen(apiPort, () => {
    console.log(`[Hack.Diversity React Template] - Server running on port ${apiPort}`);
});
