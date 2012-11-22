class CreateInterestDecisions < ActiveRecord::Migration
  def change
    create_table :interest_decisions do |t|

      t.timestamps
    end
  end
end
