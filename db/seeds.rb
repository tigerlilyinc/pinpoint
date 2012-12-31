# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).

user = User.create!(:name => "Charles Xavier", :email => "user@host.test", :password => "asdfasdf")

skill_tags = ["C", "C++", "Ruby", "Perl", "Python", "Ruby/Rails", "Node.js", "MySQL", "PostgreSQL", "MongoDB", "Redis", "RSpec", "Memcached"]
skill_tags.each do |tag|
  Tag::Skill.create!(:value => tag)
end

industry_tags = ["Social", "Education", "Mobile", "Local", "Consumer", "Enterprise", "Commerce", "Nonprofit"]
industry_tags.each do |tag|
  Tag::Industry.create!(:value => tag)
end

position_tags = ["Entry", "Junior", "Senior", "Lead", "Executive"]
position_tags.each do |tag|
  Tag::Position.create!(:value => tag)
end

user.skills << Tag::Skill.order("random()").limit(6)
user.industries << Tag::Industry.order("random()").limit(4)
user.positions << Tag::Position.order("random()").limit(2)

tag_proc = Proc.new { |tag| Tag.find_by_value(tag) }

companies = [
  { :name => "UniversityNow",
    :email => "todd@unow.com",
    :description => "UniversityNow was built and supported by a team of visionaries who could see the future and believe in the right that everyone has to higher education. Learn more about the UniversityNow team.",
    :size => 40,
    :dev_team_size => 3,
    :industries => ["Social", "Education"],
    :requisitions => [ { :name => "Full-stack Ruby on Rails Developer",
                         :description => "We're looking for someone to take ownership across the board on various tasks.",
                         :skills => [ "Ruby/Rails", "PostgreSQL" ],
                         :positions => [ "Junior", "Senior" ]},
                        { :name => "QA Developer",
                          :description => "Love testing? We need someone to ensure our code goes out bug free!",
                          :skills => [ "Ruby/Rails", "RSpec", "PostgreSQL" ],
                          :positions => [ "Junior", "Senior" ] } ] }
]

companies.each do |company_data|
  industry_tags = company_data[:industries].map(&tag_proc)
  company = Company.create!(:name => company_data[:name],
                            :email => company_data[:email],
                            :description => company_data[:description],
                            :size => company_data[:size],
                            :dev_team_size => company_data[:dev_team_size],
                            :industries => industry_tags)
  company_data[:requisitions].each do |requisition_data|
    skill_tags = requisition_data[:skills].map(&tag_proc)
    position_tags = requisition_data[:positions].map(&tag_proc)
    requisition = Requisition.create!(:company => company,
                                      :name => requisition_data[:name],
                                      :skills => skill_tags,
                                      :positions => position_tags)
    interest_decision = InterestDecision.create!(:requisition => requisition, :user => user)
  end
end

