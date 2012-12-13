class Company < ActiveRecord::Base
  has_many :requisitions
end

