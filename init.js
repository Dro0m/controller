/* 
 Author: (jffry (dsr))
 Date: 02-03-2020
 Version: 0.0.1
 Descrition: controller entry point
 */

const controller = require('./router/index');

const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;

controller.listen(port, _ => {
    console.log('Droom controller active on port ' + port);
});
