'use strict';

const PORT = process.env.CUSTOMER_PORT || 8888;

require('./app').listen(PORT, () => {
	const colors  = require('colors/safe');
	const message = 'Customer API service running on port: %d';
	console.log(colors.green.underline(message), PORT);
});
