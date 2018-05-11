var express = require('express');
var port = process.env.PORT || 7800;

var app = express();

app.use(express.static(__dirname + '/public'))

app.listen(port, function(){
	console.log('app is running on port 7800');
});