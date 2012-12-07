class RenameSkillTagsToTags < ActiveRecord::Migration
  def up
    rename_table :skill_tags, :tags
  end

  def down
    rename_table :tags, :skill_tags
  end
end

