class RequisitionTag < ActiveRecord::Base
  belongs_to :requisition
  belongs_to :tag

  validates_presence_of :requisition
  validates_presence_of :tag

  validates_uniqueness_of :requisition_id, :scope => :tag_id
end

