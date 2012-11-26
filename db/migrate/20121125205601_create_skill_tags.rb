class CreateSkillTags < ActiveRecord::Migration
  def change
    create_table :skill_tags do |t|
      t.string :value, :null => false, :default => ""

      t.timestamps
    end
  end
end
