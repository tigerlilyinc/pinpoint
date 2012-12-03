class CreateLeadsTable < ActiveRecord::Migration
  def up
      create_table :leads do |t|
      t.string  :name
      t.string  :email
      t.text  :notes
      t.string :status
    end

    add_index(:leads, :email, :unique => true)
    add_index(:leads, :name)
  end

  def down
    drop_table :leads
  end
end
