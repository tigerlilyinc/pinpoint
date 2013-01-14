class CreateCompanies < ActiveRecord::Migration
  def change
    create_table :companies do |t|
      t.string :name
      t.string :email
      t.text :description
      t.integer :size
      t.integer :dev_team_size
      t.timestamps
    end
  end
end
