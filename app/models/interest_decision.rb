class InterestDecision < ActiveRecord::Base
  belongs_to :requisition
  belongs_to :user

  validates_inclusion_of :disposition, :in => [nil, "interesed", "uninterested"]
  validates_presence_of :requisition
  validates_presence_of :user

  def serializable_hash(options)
    options ||= {}

    options = {
      :include => [ :requisition ]
    }.update(options)

    super(options)
  end
end

