var express = require('express');
var app = express();
var exphbs = require('express3-handlebars');
var routes = require('./routes');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public')); //static filems made avaulavle
app.engine('handlebars',
	exphbs({defaultLayout: 'main'})
);
app.set('view engine', 'handlebars');

app.locals.setTitle = "this is a local variable available anywheew --";

app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/user/:name', routes.users);
app.get('/enterScore', routes.enterScore);
app.get('/results', routes.results);
app.get('*', function(req, res){
	res.render('error');
});
app.post('/enterScore', function(req, res){
	console.log('Player 1 score is :'+ req.body.opponent);
	res.redirect(303, '/results');
});

var port = Number(process.env.port || 3000);
app.listen(port);