class TeamsController < ApplicationController
	def index
		render_teams
	end

	def team_players
		playerList = Player.includes(:team).all
		render :json => playerList.to_json(:include => :team)
	end

	def create
		Team.create(team_params)
		render_teams
	end

	def destroy
		Team.find(params[:id]).destroy
		render_teams
	end

	def change_team
		player = Player.find(params[:pid]) 
		player.team_id = params[:tid]
		player.save
		playerList = Player.includes(:team).all  
		render :json => playerList.to_json(:include => :team)
	end

	private

	def team_params
		params.require(:team).permit(:name)
	end

	def render_teams
		render :json => Team.all   
	end

end
