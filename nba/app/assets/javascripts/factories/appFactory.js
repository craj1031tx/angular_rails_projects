//APP FACTORY


app.factory("appFactory", function($http){
	
	function appFactory(){
		this.playerIndex = function(callback){
			$http.get("/players").success(function(returnedData){
				callback(returnedData);
			});
		};

		this.teamIndex = function(callback){
			$http.get("/teams").then(function(returnedData){
				callback(returnedData);
			});
		};

	}
	return new appFactory();
})