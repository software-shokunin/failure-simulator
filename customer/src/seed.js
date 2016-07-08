'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://database/customer');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("chamber of secrets is open!!");
  let customerSchema = mongoose.Schema({
    id: Number,
    name: String,
    paymentDetails: {
      number: String,
      expiry: Date,
      ccv:    String
    }
  });

  let Customer = mongoose.model('Customer', customerSchema);

  let c1 = new Customer({
    "name": "Customer 1",
    "paymentDetails": {
      "number" : "4000 0000 0000 0002",
      "ccv"    : "123",
      "expiry" : "11/20"
    }
  });

  c1.save((err, c) => {
    if (err) {
        return console.error(err);
    }
    console.log('Saved!');
  })
});
