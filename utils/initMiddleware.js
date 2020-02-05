/* 
 Author: (jffry (dsr))
 Date: 02-03-2020
 Version: 0.0.1
 Description: inits all middleware functions and express settings
 */

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('./jwt');
const errorHandler = require('./error-handler');


module.exports = (server) => {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cors());
    app.use(jwt());
    app.use('/users', require('../users/users.controller'));
    app.use(errorHandler);
}
