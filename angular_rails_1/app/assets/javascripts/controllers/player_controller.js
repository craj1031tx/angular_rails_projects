//PLAYER CONTROLLER
app.controller("playersController", function($scope, playerFactory){
	playerFactory.index(function(json){
		$scope.players = json;
	});

	$scope.createPlayer = function(){
		playerFactory.create($scope.newPlayer, function(json){
			$scope.players = json;
			$scope.newPlayer = {};
		})
	}

	$scope.deletePlayer = function(id){
		playerFactory.delete(id, function(json){
			$scope.players = json;
		})
	}
});