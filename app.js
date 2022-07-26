var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
const bodyParser = require('body-parser');
const fs = require('fs');
const { json } = require('body-parser');

var pruebaRouter = require('./routes/prueba');

// Ventanas
var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var mainRouter = require('./routes/principal');
var ctrlUsuariosRouter = require('./routes/dashboardAdmin');
var mainRouter = require('./routes/main');
var logout = require('./routes/logout');
var dashClientesRouter = require('./routes/dashboardClientes');
var users = require('./routes/users');




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: '123456', resave: true, saveUninitialized: true }));
app.use(express.urlencoded({ extended: false }));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: '123456', resave: true, saveUninitialized: true}));
app.use(express.urlencoded({extended:false}));
app.use(express(json));

// ----------------Paginación------------------------//
app.use('/', indexRouter);
//variable de prueba
app.use('/prueba', pruebaRouter);
//end variable de prueba
app.use('/users', users);
app.use('/principal', mainRouter);
app.use('/login', loginRouter);
app.use('/login', loginRouter);
app.use('/logout', logout);
app.use('/dashboardClientes', dashClientesRouter);
app.use('/dashboardAdmin', ctrlUsuariosRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//*A
//Y
module.exports = app;
