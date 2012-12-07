class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable

  attr_accessible :email, :password, :password_confirmation, :remember_me

  has_many :user_tags
  has_many :skills, :through => :user_tags
  has_many :industries, :through => :user_tags
  has_many :positions, :through => :user_tags
end

