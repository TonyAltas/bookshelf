var mongoose = require('mongoose')

var authorSchema = new mongoose.Schema({
	firstnamme: String,
	 lastname: String
});

module.exports = mongoose.model('Author', authorSchema);
