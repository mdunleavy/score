var db = require('../db.js');
var jsons = {"employees":[
		{"firstName": "Mark", "lastName": "Dunleavy"}
		]};

var userData = require('../data/users.json');
var scoreData = require('../data/scores.json');

var ResultSchema = require('../schemas/results');

exports.index =  function(req, res){
	res.render("index",{
		name: jsons.employees[0].firstName,
		names: jsons.employees[0].lastName,
		user1: userData.users[0].userName,
		users: userData.users,
		title: "home page",
		classname: "home"
	});
};
exports.about = function(req, res){
	res.render('about',{
		classname: "about"
	});
};

exports.users = function(req, res){
	var name = req.params.name;
	res.render('user', {
		name: name,
		title: name +"'s page",
		classname: "user"
	});
};


exports.testForm = function(req, res){

	res.render('testForm');
};

exports.testResults = function(req, res){
	req.session.lastOpponent = req.body.Player2;

	var gameResult = new ResultSchema({
		gameID: req.body.gameID,
		player1id: req.body.Player,
		player2id: req.body.Player2,
		player1Set1: req.body.play1set1,
		player2Set1: req.body.play2set1

	}).save(function(err, doc){
		if(err){
			console.log(err);
			res.status(500);
		}else{
			res.redirect(303, 'testAllResult');
			
		}
	});
};

exports.testAllResult = function(req,res){

	ResultSchema.find()
	.setOptions({sort:'gameID'})
	.exec(function(err, results){
		if (err){
			console.log(err);
		}else{
			//res.json(results); This line of code returns JSON may be useful for angular
			res.render('testAllResult',{
				title: "all results",
				results: results,
				lastOpponent: req.session.lastOpponent
			});
		}
	});

};




