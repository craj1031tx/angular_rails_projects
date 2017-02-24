//app.js for angular project

var app = angular.module('nbaApp',['ngRoute']);

app.config(function($routeProvider, $httpProvider){
	$routeProvider
		.when("/partial1",{
			templateUrl:"/partials/partial1.html",
			controller:"playersController"
		})
		.when("/partial2",{
			templateUrl:"/partials/partial2.html",
			controller:"teamsController"
		})

	$httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
});

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











//PLAYER FACTORY
app.factory("playerFactory", function($http){
	var factory = {};
	factory.index = function(callback){
		$http.get("/players").success(function(output){
			callback(output);
		});
	};

	factory.create = function(playerInfo, callback){
		$http.post("/players", playerInfo).success(function(returnedData){
			callback(returnedData);
		});
	};

	factory.delete = function(id, callback){
		$http.delete("/players/"+id).success(function(returnedData){
			callback(returnedData)
		});
	};

	return factory;
});


//TEAM FACTORY
app.factory("teamFactory", function($http){
function teamFactory(){

	this.index = function(callback){
		$http.get("/all_teams").success(function(returnedData){
			callback(returnedData);
		})
	};

	this.create = function(team, callback){
		$http.post("/teams", team).success(function(returnedData){
			callback(returnedData);
		});
	};

	this.delete = function(id, callback){
		$http.delete("/teams/"+id).success(function(returnedData){
			callback(returnedData);
		});
	};
};
return new teamFactory();
});