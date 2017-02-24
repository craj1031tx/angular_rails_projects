//app.js

var app = angular.module('nbaApp', ['ngRoute']);

app.config(function($routeProvider, $httpProvider){
	$routeProvider
		.when("/players",{
			templateUrl:"/partials/players.html",
			controller:"playerController"
		})
		.when("/teams",{
			templateUrl:"/partials/teams.html",
			controller:"teamController"
		})
		.when("/associations",{
			templateUrl:"/partials/associations.html",
			controller:"associationController"
		})
		.otherwise("/")

	//$httpProvider.defaults.header.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
})