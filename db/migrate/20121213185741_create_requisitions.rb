class CreateRequisitions < ActiveRecord::Migration
  def up
    create_table :requisitions do |t|
      t.integer :company_id
      t.string :name
      t.text :description
      t.timestamps
    end
    add_index :requisitions, :company_id

    create_table :requisition_tags do |t|
      t.integer  :requisition_id
      t.integer  :tag_id
      t.timestamps
    end
    add_index :requisition_tags, :requisition_id
    add_index :requisition_tags, :tag_id
  end

  def down
    drop_table :requisition_tags
    drop_table :requisitions
  end
end

