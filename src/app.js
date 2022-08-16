const path = require('path');
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const router = require('./routes');
const { clientErrors, serverErrors } = require('./controllers/error');
const app = express();

app.set('port', process.env.PORT || 3001);
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    express.static(path.join(__dirname, '..', 'public'))
);

app.use(router);
app.use(clientErrors);
app.use(serverErrors);

module.exports = app;