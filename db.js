var mongoose = require('mongoose');

mongoose.connect('mongodb://user:user@ds013941.mlab.com:13941/game_results');
module.exports = mongoose.connection;