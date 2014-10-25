var app = angular.module('fullestStack');

app.controller('friendsController', function($scope, friendsService){
	
	$scope.getFriends = function(){
		friendsService.getFriends().then(function(data){
			$scope.friends = data;
			console.log($scope.friends);
		});
	};

	$scope.addFriend = function(){
		friendsService.addFriend($scope.friend).then(function(res){
			$scope.getFriends();
			console.log(res);
			$scope.friend = "";
		});
	};

	$scope.getFriends();

	$scope.unfriend = function(friend){
		friendsService.unfriend(friend).then(function(res){
			console.log(res);
			$scope.getFriends();
		})
	}

});