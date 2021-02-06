const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Item = new Schema(
    {
<<<<<<< HEAD
      isbn: {  //isbn
          type: String,
          required: true
      },
        title: {  //name
            type: String,
            required: true
        },
        author: { //daysOfWeek -->TimeFrame
            type: String,
            required: true
        },
        publication_year: { //timeFrame --> DaysOfWeek
=======
        name: {
            type: String,
            required: true
        },
        daysOfWeek: {
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
            type: Map,
            of: String,
            required: false
        },
<<<<<<< HEAD
        url: { //Priority
            type: String,
            required: true
        },
        copies: { //content
=======
        timeframeNote: {
            type: String,
            required: false
        },
        priority: {
            type: Number,
            required: false
        },
        content: {
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
            type: String,
            required: true
        },
    },
<<<<<<< HEAD
    { timeStamp: true }, //timeStamp
);

var Items = mongoose.model('books', Item);
module.exports = Items;
=======
    { timestamps: true },
);

module.exports = mongoose.model('item', Item);
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
