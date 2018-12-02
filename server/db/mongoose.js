var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://allentan:team2871@ds123454.mlab.com:23454/todo-app-api', {useNewUrlParser: true});

module.exports.mongoose = mongoose;