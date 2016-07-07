'use strict';

const router    = require('express').Router();
const customers = require('../../customers.json');

router.get('/', (req, res, next) => {
	res.send('Customer is king');
});

router.get('/:id', (req, res, next) => {
	let customer = customers[req.params.id];
	if(customer) {
		res.status(302).send(customer);
	} else {
		res.sendStatus(404);
	}
});

module.exports = router;