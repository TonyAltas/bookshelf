
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

exports.query_by_bookid = function(model, value, res){
	model.findById(value, function(error, result) {
		if(error){
			console.log(error);
			res.writeHead(500, {'Content-Type' : 'text/plain'});
			res.end('Internal server error');
			return null;
		} 
		if (!result){
			if (res != null) {
				res.writeHead(404, {'Context-Type' : 'text/plain'});
				res.end("Not Found");
			}
			return null;
		}
		if(res != null) {
		res.setHeader('Content-Type' , 'application/json');
		res.end(JSON.stringify(result));
		}
	});

}
