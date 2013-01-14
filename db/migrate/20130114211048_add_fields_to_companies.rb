class AddFieldsToCompanies < ActiveRecord::Migration
  def change
    add_column :companies, :misc, :text
    add_column :companies, :location, :string
    add_column :companies, :crunchbase_url, :string
  end
end
