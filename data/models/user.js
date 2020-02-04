/*
  Author: (jffry (dsr))
  Date: 02-04-2020
  Description: "mongoose schema for the user entity"
  Version: 0.0.1
*/

const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const user_schema = new Schema({
    username: { type: String, unique: true, required: true },
    role: { type: String, enum: ['applicant', 'company'], required: true },
    hash: { type: String, required: true },
    status: { type: Boolean, enum: ['verified', 'unverified'], required: false, default: 'unverified' },
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    profile: { type: String, required: false },
    prospects: { type: String, required: false }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', user_schema);