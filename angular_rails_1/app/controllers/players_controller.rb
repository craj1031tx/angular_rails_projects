class PlayersController < ApplicationController
	def index
		testobject = Player.all
		render :json => testobject
	end
end
