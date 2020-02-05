/* 
 Author: (jffry (dsr))
 Date: 02-03-2020
 Version: 0.0.1
 Description: 
 */

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require('body-parser');
const jwt = require('./jwt');
const errorHandler = require('_helpers/error-handler');

const server = express();



module.exports = server => {
    server.use(helmet());
    server.use(express.json());
    server.use(cors());
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());
    server.use(cors());
    server.use(jwt());
    server.use(errorHandler);
};



