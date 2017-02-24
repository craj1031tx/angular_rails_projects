//playerController

app.controller("playerController", function(appFactory, $scope){
	appFactory.playerIndex(function(data){
		$scope.allPlayers = data;
	})

})