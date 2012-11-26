class CreateCompanies < ActiveRecord::Migration
  def change
    create_table :companies do |t|
      t.string :name,   :null => false
      t.string :email,  :null => false
      t.string :description, :null => false
      t.integer :size
      t.integer :dev_team_size
      t.timestamps
    end
  end
end
