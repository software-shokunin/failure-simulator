'use strict';

const express = require('express');
const PORT    = process.env.CUSTOMER_PORT || 8888;
let app       = express();

app.get('/', (req, res) => {
    res.send('Customer is king');
});

app.listen(PORT, () => {
  console.log(`Customer API service running on port: ${PORT}`);
});
