
var express = require("express");


var app = express();

app.use(express.static(__dirname));




app.listen(3000, function(){
	console.log("The frontend server is running on Port 3000");

});

var app = {};


