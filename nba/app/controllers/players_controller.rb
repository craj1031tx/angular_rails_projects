class PlayersController < ApplicationController
    def index
  		render_players
  	end


  	private

  	def render_players
  		render :json => Player.all
	end

end
