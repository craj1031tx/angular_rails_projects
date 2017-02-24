//TEAM FACTORY

app.controller("teamController", function(appFactory, $scope){

	appFactory.teamIndex(function(returnedData){
		$scope.allTeams = returnedData.data
	});

});