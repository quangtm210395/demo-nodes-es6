import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import routes from './routes';
import configs from './configs';

let app = express();
app.server = http.createServer(app);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

routes(app);

mongoose.connect(configs.mongoUrl, {server: {reconnectTries: Number.MAX_VALUE}});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log(`Mongodb connected at ${configs.mongoUrl}`);
});

app.listen(configs.port, () => {
    console.log(`Server is running at localhost:${configs.port}`);
});