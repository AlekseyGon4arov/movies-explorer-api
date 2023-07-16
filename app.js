const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const cors = require('cors');
const centralizedErrorController = require('./middlewares/centralizedErrorController');

const router = require('./routes');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { NotFound } = require('./errors');

const { PORT = 3000 } = process.env;
const app = express();
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/bitfilmsdb');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(requestLogger);

app.use(router);

app.use((req, res, next) => {
  next(new NotFound('Запрошен несуществующий роут'));
});

app.use(errorLogger);
app.use(errors());

app.use(centralizedErrorController);

app.listen(PORT);
