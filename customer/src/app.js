'use strict';
const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.send("qwe");
});

app.listen(8888);