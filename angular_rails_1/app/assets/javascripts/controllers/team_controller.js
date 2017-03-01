//TEAM CONTROLLER
app.controller("teamsController", function($scope, teamFactory){
	
	teamFactory.index(function(returnedData){
		$scope.teams = returnedData;
	})

	$scope.createTeam = function(){
		teamFactory.create($scope.newTeam,function(json){
			$scope.teams = json;
		});
	};

	$scope.deleteTeam = function(id){
		teamFactory.delete(id, function(json){
			$scope.teams = json;
		});
	};

})