'use strict';

var express = require('express');

var app = express();

// all environments
app.configure(function () {
    app.use(express.static(__dirname + '/public'));
});

app.get('/', function (req, res) {
    res.send('works');
});


// define fix data:
var listUsers = [
	{
		name: 'Peter',
		age: 24
	}, {
		name: 'Jana',
		age: 33
	}
];

app.get('/users', function (req, res) {
	res.send(listUsers);
});


var server = app.listen(3000, function () {
    console.log('Listening on port %d', server.address().port);
});
