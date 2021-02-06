const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Item = new Schema(
    {
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
            type: Map,
            of: String,
            required: false
        },
        url: { //Priority
            type: String,
            required: true
        },
        copies: { //content
            type: String,
            required: true
        },
    },
    { timeStamp: true }, //timeStamp
);

var Items = mongoose.model('books', Item);
module.exports = Items;
