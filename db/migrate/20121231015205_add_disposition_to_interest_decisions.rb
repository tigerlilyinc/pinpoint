class AddDispositionToInterestDecisions < ActiveRecord::Migration
  def change
    add_column :interest_decisions, :disposition, :string
    add_index :interest_decisions, :disposition
  end
end

