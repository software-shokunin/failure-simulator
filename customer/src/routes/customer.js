'use strict';

const router = require('express').Router();
const customers = require('../../customers.json');

router.get('/', (req, res, next) => {
  res.send('Customer is king');
});

router.get('/:id', (req, res, next) => {
  res.send(customers[req.params.id]);
});

module.exports = router;
