var express = require('express'),
	bodyParser = require('body-parser'),
	// database = require('./server-assets/database'),
	app = express(),
	cors = require('cors'),
	mongoose = require('mongoose'),
	Friend = require('./server-assets/friend/friendController');

var port = 9009;

// Mongo setup
var databaseReference = "mongodb://localhost/theFullestStack"
mongoose.connect(databaseReference);


app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

// Pre mongo api
// app.get('/friends', function(req, res){
// 	res.send(database.getFriends());
// })

// post mongo api
app.get('/friends', Friend.getFriends);

// app.post('/friends/new', function(req, res){
// 	res.send(database.addFriend(req.body));
// })

app.post('/friends', Friend.addFriend);
app.delete('/friends/:id', Friend.unFriend);

var connection = mongoose.connection;
connection.once('open', function(){
	app.listen(port, function(){
		console.log('Listening at ' + port);
	});
	console.log('connected at ' + databaseReference);
})