var express = require('express');

//var MongoStore = require('connect-mongo')(express);
var cookieParser = require('cookie-parser'),
	expressSession = require('express-session'),
	MongoStore = require('connect-mongo')(expressSession);
var app = express();

var exphbs = require('express3-handlebars');
var routes = require('./routes');
var bodyParser = require('body-parser');
var db = require('./db.js');

//setting up sessions
app.use(cookieParser());
app.use(expressSession({
	secret: 'secret',
    store: new MongoStore({
    	mongooseConnection: db
    }),
    resave: false,
    saveUninitialized: true
}));

//to parse info from the request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public')); //static filems made available

//setting up templating engine
app.engine('handlebars',
	exphbs({defaultLayout: 'main'})
);
app.set('view engine', 'handlebars');

//app.locals makes data available to all routes
app.locals.setTitle = "this is a local variable available anywheew --";


//setting up the routes
app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/user/:name', routes.users);
app.get('/testForm', routes.testForm);
app.post('/testResults', routes.testResults);
app.get('/testAllResult', routes.testAllResult);

//error message is requested route does not match existing route
app.get('*', function(req, res){
	res.render('error');
});
var port = Number(process.env.port || 3000);
app.listen(port);