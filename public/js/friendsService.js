var app = angular.module('fullestStack');

app.service('friendsService', function($http, $q){
	
	this.getFriends = function(){
		return $http({
			method: "GET",
			url: 'http://localhost:9009/friends'
		}).then(function(res){
			return res.data;
		});
	};

	this.addFriend = function(friend){
		return $http({
			method: "POST",
			url: "http://localhost:9009/friends",
			data: friend
		});
	};

	this.unfriend = function(friend){
		return $http({
			method: "DELETE",
			url: "http://localhost:9009/friends/" + friend._id
		});
	};


});