
exports.bookList = function(model, res) {
	model.find(function (error, result) {
		if (error) {
			console.error(error);
			return null;
		}
		if (res != null){
			res.setHeader('Content-Type',
				'application/json');
			res.end(JSON.stringify(result));
		}
	});
}
