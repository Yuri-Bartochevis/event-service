var express = require('express');
var logger = require('morgan');
const routes = require('./routes');
const cors = require('cors');
const dotEnv = require('dotenv');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(routes);
dotEnv.config();


app.listen(process.env.APP_PORT, () => console.log(`${process.env.APP_NAME} listening on port ${process.env.APP_PORT}!`));
