<<<<<<< HEAD


const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost:27017/cscl', { useNewUrlParser: true, useUnifiedTopology: true})
=======
const mongoose = require('mongoose');

mongoose
    .connect('mongodb://127.0.0.1:27017/items', { useNewUrlParser: true })
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
    .catch(e => {
        console.error('Connection error', e.message);
    });

const db = mongoose.connection;

module.exports = db;
