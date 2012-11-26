class CompanySkill < ActiveRecord::Base

  belongs_to :company
  belongs_to :skill_tag

end
