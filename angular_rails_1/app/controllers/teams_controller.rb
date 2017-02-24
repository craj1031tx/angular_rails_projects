class TeamsController < ApplicationController
	def index
		team_index = Team.all   
		render :json => team_index
	end
end
