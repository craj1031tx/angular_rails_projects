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