class Company < ActiveRecord::Base
  has_many :requisitions

  has_many :company_tags
  has_many :industries, :through => :company_tags, :class_name => "Tag::Industry", :source => :tag

  def serializable_hash(options)
    options ||= {}

    options = {
      :include => [ :industries ]
    }.update(options)

    super(options)
  end
end

