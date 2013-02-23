class CreateCandidates < ActiveRecord::Migration
  def change
    create_table :candidates do |t|
      t.string :full_name
      t.string :email
      t.string :status
      t.text :notes
      t.string :source
      t.string :recruiter
      t.timestamps :contact_at

      t.timestamps
    end
  end
end
