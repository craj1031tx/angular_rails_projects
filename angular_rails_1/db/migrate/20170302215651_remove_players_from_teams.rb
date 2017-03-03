class RemovePlayersFromTeams < ActiveRecord::Migration
  def change
  	remove_reference :teams, :player
  end
end
