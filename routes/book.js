var express = require('express');
var router = express.Router();
var url = require('url');

var bookdataservice = require('../modules/bookdataservice');
var Book = require('../model/book');

router.get('/books', function(req, res){
	var params = url.parse(req.url, true).query;
	if(Object.keys(params).length == 0){
		Book.find(function (error, result) {
			if(error) {
				console.log(error);
				return null;
			}
			if (res != null) {
				res.setHeader('Content-Type', 'application/json');
				res.end(JSON.stringify(result));
			}
		});
	} else {
		var key = Object.keys(params)[0];
		var value = params[key];
		var book = bookdataservice.query_by_bookid(Book,value,res);
//		if (res != null) {
//			res.setHeader('Content-Type', 'application/json');
//			res.end(JSON.stringify(book));
//		}
	}
	book = new Book();

	
	
});

module.exports = router;
