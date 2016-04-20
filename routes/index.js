var jsons = {"employees":[
		{"firstName": "Mark", "lastName": "Dunleavy"}
		]};

var userData = require('../data/users.json');
var scoreData = require('../data/scores.json');



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

 
exports.enterScore = function(req, res){
	res.render('enterScore',{
		classname: "enterScore"
	});
};


exports.results = function(req,res){
	var games = scoreData.games;
	var player1s1 = scoreData.games[0].player1id;
	var player1Set1 = scoreData.games[0].player1Set1;
	var player2s1 = scoreData.games[0].player2id;
	var player2Set1 = scoreData.games[0].player2Set1;
	 
	
	res.render('results', {
		player1: scoreData.games.player1id,
		player2: scoreData.games.player2id,
		player1Set1: scoreData.games.player1Set1,
		player2Set1:scoreData.games.player2Set1,
		games: scoreData.games,
		gameID: scoreData.games.gameID,

		title: "results page",
		classname: "results"
	});
};