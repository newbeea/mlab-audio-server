var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var compress = require('compression');



var http = require('http');
app.use(compress());
// view engine setup
app.set('views', path.join(__dirname, 'dist'));
// app.set('view engine', 'jade');
app.engine('.html', require('ejs').renderFile);  
app.set('view engine', 'html');  
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


// 跨域支持
app.all('/*', function (req, res, next) {
    
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');

  next();
});

app.use('/api', require('./api'));
app.use('/audio', express.static('/acs/data', {maxAge: '365d'}));
app.use(express.static(path.join(__dirname, 'vue'), {maxAge: '365d'}));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  });
});



var server = http.createServer(app);
var port = process.env.PORT || 3006;


console.log('listening at :%s', port);
server.listen(port);


