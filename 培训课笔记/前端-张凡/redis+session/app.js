var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 需要下载 express-session , cors , ioredis
var session = require('express-session');

var RedisStore = require('connect-redis')(session);

var redis = require('./redis').redis;

var app = express();

// redis的中间件需要写在路由上面
app.use(session({

  store: new RedisStore({

    client:redis,

    prefix:'hgk'

  }),

  cookie:{
    maxAge:60*1000
  },

  secret:'sessiontest',

  resave:true,

  saveUninitialized:true

}));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
