var friends = [
	{
		name: 'Pono',
		age: '26',
		yearMet: '2013'
	},
	{
		name: 'Phil',
		age: '27',
		yearMet: '2013'
	},
	{
		name: 'Cappy',
		age: '22',
		yearMet: '2013'
	}
];

module.exports.getFriends = function() {
	return friends;
}

module.exports.addFriend = function(friendObj) {
	friends.push(friendObj);
}