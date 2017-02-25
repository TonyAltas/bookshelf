var express = require('express');
var router = express.Router();

var Book = require('../model/book.js');

/* GET home page. */
router.get('/search', function(req, res, next) {
   //Book.find({}, function(error, result) {
	//	if (error) {
	//		console.error(error);
	//	}
	//	if (response != null) {
	//		//res.setHeader('Content-Type', 'application/json');
	//		//res.end(JSON.sringify(result));
	//	}
	//});
	Book.find(function (error, result) {
		if (error) {
			return console.error(error);
		}
		console.log(result);
	res.end(JSON.stringify(result));
	});
//  res.render('search', { title: 'Search' });
});

module.exports = router;
