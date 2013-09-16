var express = require('express'),
	path = require('path')

var api = require('./api'),
	middleware = require('./middleware')

var app = express()

//App config
//app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride())
app.use('/static',express.static(path.join(__dirname, '..', 'public')));
app.use('/api', express.static(path.join(__dirname, '..', 'content')));

console.log(path.join(__dirname, '..', 'public'))
app.use(app.router);


if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//Routes
app.get('/', api.root)

module.exports = exports = app