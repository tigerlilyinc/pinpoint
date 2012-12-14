class CreateCompanyTags < ActiveRecord::Migration
  def up
    create_table :company_tags do |t|
      t.integer  :company_id
      t.integer  :tag_id
      t.timestamps
    end
    add_index :company_tags, :company_id
    add_index :company_tags, :tag_id
  end

  def down
    drop_table :company_tags
  end
end

