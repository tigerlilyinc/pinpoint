class Message < ActiveRecord::Base
  attr_accessible :direction, :notes, :text, :timestamp
end
