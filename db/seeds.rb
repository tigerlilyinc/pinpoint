# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).

u = User.create!(:email => "justinpincar@gmail.com", :password => "asdfasdf")

skill_tags = ["C", "C++", "Ruby", "Perl", "Python", "Ruby/Rails", "Node.js", "MySQL", "PostgreSQL", "MongoDB", "Redis", "Memcached"]
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

u.skills << Tag::Skill.order("random()").limit(6)
u.industries << Tag::Industry.order("random()").limit(4)
u.positions << Tag::Position.order("random()").limit(2)

