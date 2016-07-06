'use strict';

const express = require('express');
const PORT    = process.env.CUSTOMER_PORT || 8888;
let app       = express();
let routes    = require('./routes/index');

app.use('/', routes);

app.listen(PORT, () => {
	const colors  = require('colors/safe');
	const message = `Customer API service running on port: ${PORT}`;
	console.log(colors.green.underline(message));
});
