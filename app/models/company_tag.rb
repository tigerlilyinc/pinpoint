class CompanyTag < ActiveRecord::Base
  belongs_to :company
  belongs_to :tag

  validates_presence_of :company
  validates_presence_of :tag

  validates_uniqueness_of :company_id, :scope => :tag_id
end

