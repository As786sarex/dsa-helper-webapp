const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const routes = require('./routes/problem.routes');
const errorLogger = require('./utils/errorlogger');

const app = express();
dotenv.config();
const url = process.env.MONGO_URL;
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/api/', routes);
app.use(errorLogger);
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Connected to database');
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = app;
