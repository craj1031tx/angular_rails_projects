class TeamsController < ApplicationController
  def index
  	render_teams
  end

  private

  def render_teams
  	render :json => Team.all  
  end
end
