process.env.NODE_ENV = process.env.NODE_ENV || 'local';

var express = require('./config/express');
var passport = require('./config/passport');

var app = express();
passport();

var port = process.env.PORT || 3001;


app.listen(port);
module.exports = app;

console.info('Server running on port: ' + port);