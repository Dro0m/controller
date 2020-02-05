/* 
 Author: (jffry (dsr))
 Date: 02-03-2020
 Version: 0.0.1
 Desciption: 
 */

const express = require('express');
const initMiddleware = require('../utils/initMiddleware');

const usersRouter = require('./users/index');
const server = express();

initMiddleware(server);

server.use('/users', usersRouter);

module.exports = server;
