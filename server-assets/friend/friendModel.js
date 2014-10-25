var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var friend = new Schema({
	name: { type: String, required: true, max: 50 },
	age: { type: Number },
	yearMet: { type: Number }
})

module.exports = mongoose.model('Friend', friend)

// check out cloudinary