//app.js for angular project

var app = angular.module('nbaApp',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when("/partial1",{
			templateUrl:"/partials/partial1.html",
			controller:"playersController"
		})
		.when("/partial2",{
			templateUrl:"/partials/partial2.html",
			controller:"teamsController"
		})
});


app.controller("playersController", function($scope, playerFactory){
	playerFactory.index(function(json){
		console.log("controller got back", json);
		$scope.players = json;
	});
});

app.controller("teamsController", function($scope, teamFactory){
	teamFactory.index(function(returnedData){
		$scope.teams = returnedData;
	})
})

app.factory("playerFactory", function($http){
	var factory = {};
	factory.index = function(callback){
		$http.get("/players").success(function(output){
			callback(output);
		});
	};
	return factory;
});

app.factory("teamFactory", function($http){
function teamFactory(){

	this.index = function(callback){
		$http.get("/all_teams").success(function(returnedData){
			callback(returnedData);
		})
	};
}
return new teamFactory();
});