class Candidate < ActiveRecord::Base
  has_many :candidate_skills
  has_many :skill_tags, :through => :candidate_skills
end
