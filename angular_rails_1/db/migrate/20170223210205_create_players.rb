class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.string :fn
      t.string :ln

      t.timestamps null: false
    end
  end
end
