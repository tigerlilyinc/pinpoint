class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable, :token_authenticatable

  attr_accessible :name, :email, :password, :password_confirmation, :remember_me, :contact_me

  has_many :user_tags
  has_many :skills, :through => :user_tags, :class_name => "Tag::Skill", :source => :tag
  has_many :industries, :through => :user_tags, :class_name => "Tag::Industry", :source => :tag
  has_many :positions, :through => :user_tags, :class_name => "Tag::Position", :source => :tag

  has_many :interest_decisions
  has_many :decided_interest_decisions, :class_name => "InterestDecision", :conditions => ["disposition is not null"]
  has_many :undecided_interest_decisions, :class_name => "InterestDecision", :conditions => ["disposition is null"]

  before_save :ensure_authentication_token

  def as_json(options = {})
    { authentication_token: authentication_token }.merge super
  end

  def serializable_hash(options)
    options ||= {}

    options = {
      :include => [ :user_tags ]
    }.update(options)

    super(options)
  end
end

