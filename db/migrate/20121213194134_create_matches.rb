class CreateMatches < ActiveRecord::Migration
  def change
    add_column :interest_decisions, :requisition_id, :integer
    add_column :interest_decisions, :user_id, :integer

    add_index :interest_decisions, :requisition_id
    add_index :interest_decisions, :user_id
  end
end

