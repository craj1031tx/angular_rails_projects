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
		.when("/associations",{
			templateUrl:"/partials/assocPartial.html",
			controller:"teamsController"
		})
		.otherwise("/")

	$httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
});

