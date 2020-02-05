/*
  Author: (jffry (dsr))
  Date: 02-03-2020
  Version: 0.0.1
  Description: Mongo database connection and initialization 
*/

const config = require('config.json');
const mongoose = require('mongoose');
const user_model = require('./models/user');

mongoose.connect(process.env.MONGODB_URI || config.connectionString, { useCreateIndex: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = {
  User: user_model
};