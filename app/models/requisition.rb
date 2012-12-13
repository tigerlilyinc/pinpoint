class Requisition < ActiveRecord::Base
  belongs_to :company

  has_many :requisition_tags
  has_many :skills, :through => :requisition_tags, :class_name => "Tag::Skill", :source => :tag
  has_many :industries, :through => :requisition_tags, :class_name => "Tag::Industry", :source => :tag
  has_many :positions, :through => :requisition_tags, :class_name => "Tag::Position", :source => :tag

  def serializable_hash(options)
    options ||= {}

    options = {
      :include => [ :requisition_tags ]
    }.update(options)

    super(options)
  end
end

