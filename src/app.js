const path = require('path');
const express = require('express');
// const helmet = require('helmet');
const compression = require('compression');
const router = require('./routes');
const { handleClintError, handleServerError } = require('./controllers/error');
const app = express();
const env = require('dotenv').config()

app.set('port', process.env.PORT || 8080);
// app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    express.static(path.join(__dirname, '..', 'public'))
);

app.use(router);
app.use(handleClintError);
app.use(handleServerError);

module.exports = app;