var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet');
var compression = require('compression');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.all("*",(req, res, next) => {
    let host = req.headers.host;
    
    if(req.protocol == "http" && host != "localhost"){
        host = host.replace(/\:\d+$/, ''); // Remove port number
        res.redirect(307, `https://${host}${req.path}`);
    }
    next();
})
app.use(compression())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/config', usersRouter);

module.exports = app;
