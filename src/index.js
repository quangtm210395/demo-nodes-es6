import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import routes from './routes';
import configs from './configs';

// init express
let app = express();
app.server = http.createServer(app);

// config cho request body
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// config routing
routes(app);

// connect to mongo database
mongoose.connect(configs.mongoUrl, {server: {reconnectTries: Number.MAX_VALUE}});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log(`Mongodb connected at ${configs.mongoUrl}`);
});

// start server
app.server.listen(configs.port, () => {
    console.log(`Server is running at localhost:${configs.port}`);
});