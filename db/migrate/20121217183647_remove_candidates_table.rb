class RemoveCandidatesTable < ActiveRecord::Migration
  def up
    drop_table :candidates
  end

  def down
    create_table :candidates do |t|
      t.string  :name,           :null => false
      t.string  :email,          :null => false
      t.integer :target_salary,  :default => 0
      t.string  :linkedin,       :null => false, :default => ""
      t.string  :github,         :null => false, :default => ""
      t.timestamps
    end
  end
end
