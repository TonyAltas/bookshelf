var express = require('express');
var router = express.Router();

var Book = require('../model/book.js');
var bookdataservice = require('../modules/bookdataservice');

/* GET home page. */
router.get('/search', function(req, res, next) {
	bookdataservice.bookList(Book, res);
});

module.exports = router;
