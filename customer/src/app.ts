/// <reference path="../typings/index.d.ts" />

'use strict';
import * as express from 'express';

let app: express.Application = express();

app.get('/', (req: express.Request, res: express.Response) => {
    res.send("What cha up to");
});

app.listen(8888);