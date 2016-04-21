var mongoose = require('mongoose');

module.exports = mongoose.model('Result',{
	gameID: String,
	player1id: String,
	player2id: String,
	player1Set1: Number,
	player2Set1: Number
});