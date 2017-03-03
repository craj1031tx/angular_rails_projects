//TEAM FACTORY
app.factory("teamFactory", function($http){
function teamFactory(){

	this.index = function(callback){
		$http.get("/all_teams").success(function(returnedData){
			callback(returnedData);
		})
	};

	this.playerIndex = function(callback){
		$http.get("/team_players").success(function(returnedData){
			callback(returnedData);
		});
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

	this.changeTeam = function(pid, tid, callback){
		$http.get("/teams/"+pid+"/"+tid).success(function(returnedData){
			callback(returnedData);
		});
	};
};
return new teamFactory();
});