'use strict';

const router    = require('express').Router();
const customers = require('../../customers.json');
const NOT_FOUND = {
		status: 404,
		developerMessage: 'customer not found'
};

router.get('/', (req, res, next) => {
		res.send('Customer is king');
});

router.get('/:id', (req, res, next) => {
		let customer = customers[req.params.id];
		if(customer) {
				res.status(302).send(customer);
				return;
		}
		res.status(404).send(NOT_FOUND);
});

module.exports = router;
