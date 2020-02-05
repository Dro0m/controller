/* 
 Author: (jffry (dsr))
 Date: 02-03-2020
 Version: 0.0.1
 Description: controller entry point 
 */

require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');
const initMiddleware = require('./utils/initMiddleware')


initMiddleware(app);

const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;

app.listen(port, _ => {
    console.log('Server listening on port ' + port);
});
