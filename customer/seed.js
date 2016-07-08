'use strict';

const mongoose = require('mongoose');
const seed     = require('./seed.json');
mongoose.connect('mongodb://database/customer');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  let customerSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: String,
    paymentDetails: {
      number: String,
      expiry: Date,
      ccv:    String
    }
  });

  let Customer = mongoose.model('Customer', customerSchema);
  Customer.collection.insert(seed, (err, c) => {
      if(err) {
        console.error(err);
      } else {
        console.log('%d customers were successfully inserted', c.result.n);
      }
      db.close();
  });
});
