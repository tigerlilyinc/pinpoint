class Tag < ActiveRecord::Base
  validates_presence_of :value

  validates_uniqueness_of :value, :scope => :type

  def as_json(options = {})
    { type: type }.merge super
  end
end

