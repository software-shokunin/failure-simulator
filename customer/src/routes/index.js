'use strict';

let router = require('express').Router();

router.get('/', (req, res, next) => {
  res.send('Customer is king');
});

module.exports = router;
