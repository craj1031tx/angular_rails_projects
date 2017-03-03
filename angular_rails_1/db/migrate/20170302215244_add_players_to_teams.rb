class AddPlayersToTeams < ActiveRecord::Migration
  def change
    add_reference :teams, :player, index: true, foreign_key: true
  end
end
