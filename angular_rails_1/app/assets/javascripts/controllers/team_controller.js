//TEAM CONTROLLER
app.controller("teamsController", function($scope, teamFactory){
	
	teamFactory.index(function(returnedData){
		$scope.teams = returnedData;
	})

	teamFactory.playerIndex(function(returnedData){
		$scope.playersWithTeams = returnedData;
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

	$scope.changeTeam = function(player_id, team_id){
		teamFactory.changeTeam(player_id, team_id, function(returnedData){
			$scope.playersWithTeams = returnedData;
		});
	};

})

