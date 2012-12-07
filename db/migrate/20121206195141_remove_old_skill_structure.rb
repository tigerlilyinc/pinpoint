class RemoveOldSkillStructure < ActiveRecord::Migration
  def up
    drop_table :candidate_skills
    drop_table :company_skills
  end

  def down
    create_table "candidate_skills", :force => true do |t|
      t.datetime "created_at", :null => false
      t.datetime "updated_at", :null => false
    end

    create_table "company_skills", :force => true do |t|
      t.datetime "created_at", :null => false
      t.datetime "updated_at", :null => false
    end
  end
end

