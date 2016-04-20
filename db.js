var mongoose = require('mongoose');

mongoose.connect('mongodb://user:user@ds019940.mlab.com:19940/results');
module.exports = mongoose.connection;