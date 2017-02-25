var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
	isbn: {type: String, index: {unique: true}},
	 title: String,
	 language: String,
	 pages: Number 
});

module.exports = mongoose.model('Book', bookSchema);
