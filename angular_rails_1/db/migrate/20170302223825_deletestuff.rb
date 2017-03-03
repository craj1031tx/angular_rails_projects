class Deletestuff < ActiveRecord::Migration
  def change
  	drop_table :teams
  	drop_table :players 
  end
end
