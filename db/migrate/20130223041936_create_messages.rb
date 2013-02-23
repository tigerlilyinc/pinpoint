class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.text :text
      t.text :notes
      t.string :direction
      t.datetime :timestamp

      t.timestamps
    end
  end
end
