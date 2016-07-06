'use strict';

const express = require('express');
const app     = express();

app.use('/', require('./routes/customer'));

module.exports = app;
