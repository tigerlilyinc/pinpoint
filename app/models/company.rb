class Company < ActiveRecord::Base
  has_many :company_skills
  has_many :skill_tags, :through => :company_skills
end
