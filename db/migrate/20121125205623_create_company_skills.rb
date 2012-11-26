class CreateCompanySkills < ActiveRecord::Migration
  def change
    create_table :company_skills do |t|

      t.timestamps
    end
  end
end
