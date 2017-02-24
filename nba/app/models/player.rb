class Player < ActiveRecord::Base
  belongs_to :team
  validates :fn, :ln, presence:true
end
