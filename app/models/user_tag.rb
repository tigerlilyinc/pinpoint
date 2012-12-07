class UserTag < ActiveRecord::Base
  belongs_to :user
  belongs_to :tag

  validates_presence_of :user
  validates_presence_of :tag

  validates_uniqueness_of :user_id, :scope => :tag_id
end

