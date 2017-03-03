var express = require('express');
var router = express.Router();

var Book = require('../model/book.js');
var bookdataservice = require('../modules/bookdataservice');

var Book = require('../model/book');
var Author = require('../model/author');


/* GET home page. */
router.get('/search', function(req, res, next) {
	var book = new Book();
	var author = new Author();
	author.firstname = "Tony";
	author.lastname = "not first name";
	author.save(function(error, author){
		if(error){
			console.log(error);
			return;
		}
		book.author = author._id;
		console.log('The book authorid: ' + book.author);
		console.log('author id: ' + author._id);
		book.isbn = '2';
		book.title = "Lord Of The Rings";
		book.language = "English";
		book.pages = 302;
		book.save();
	});
	
	bookdataservice.bookList(Book, res);
});

module.exports = router;
