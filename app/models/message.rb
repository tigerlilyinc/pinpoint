class Message < ActiveRecord::Base
  attr_accessible :direction, :notes, :text, :timestamp
  belongs_to :candidate
end
