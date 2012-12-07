class AddTypeToSkillTags < ActiveRecord::Migration
  def change
    add_column :skill_tags, :type, :string
  end
end

