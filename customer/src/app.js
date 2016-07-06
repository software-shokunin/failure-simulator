'use strict';

const express = require('express');
let app       = express();
let routes    = require('./routes/index');

app.use('/', routes);

module.exports = app;
