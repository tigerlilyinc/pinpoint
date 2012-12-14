# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20121214183342) do

  create_table "candidates", :force => true do |t|
    t.string   "name",                          :null => false
    t.string   "email",                         :null => false
    t.integer  "target_salary", :default => 0
    t.string   "linkedin",      :default => "", :null => false
    t.string   "github",        :default => "", :null => false
    t.datetime "created_at",                    :null => false
    t.datetime "updated_at",                    :null => false
  end

  create_table "companies", :force => true do |t|
    t.string   "name",          :null => false
    t.string   "email",         :null => false
    t.string   "description",   :null => false
    t.integer  "size"
    t.integer  "dev_team_size"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
  end

  create_table "company_tags", :force => true do |t|
    t.integer  "company_id"
    t.integer  "tag_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "company_tags", ["company_id"], :name => "index_company_tags_on_company_id"
  add_index "company_tags", ["tag_id"], :name => "index_company_tags_on_tag_id"

  create_table "interest_decisions", :force => true do |t|
    t.datetime "created_at",     :null => false
    t.datetime "updated_at",     :null => false
    t.integer  "requisition_id"
    t.integer  "user_id"
  end

  add_index "interest_decisions", ["requisition_id"], :name => "index_interest_decisions_on_requisition_id"
  add_index "interest_decisions", ["user_id"], :name => "index_interest_decisions_on_user_id"

  create_table "leads", :force => true do |t|
    t.string "name"
    t.string "email"
    t.text   "notes"
    t.string "status"
  end

  add_index "leads", ["email"], :name => "index_leads_on_email", :unique => true
  add_index "leads", ["name"], :name => "index_leads_on_name"

  create_table "requisition_tags", :force => true do |t|
    t.integer  "requisition_id"
    t.integer  "tag_id"
    t.datetime "created_at",     :null => false
    t.datetime "updated_at",     :null => false
  end

  add_index "requisition_tags", ["requisition_id"], :name => "index_requisition_tags_on_requisition_id"
  add_index "requisition_tags", ["tag_id"], :name => "index_requisition_tags_on_tag_id"

  create_table "requisitions", :force => true do |t|
    t.integer  "company_id"
    t.string   "name"
    t.text     "description"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  add_index "requisitions", ["company_id"], :name => "index_requisitions_on_company_id"

  create_table "tags", :force => true do |t|
    t.string   "value",      :default => "", :null => false
    t.datetime "created_at",                 :null => false
    t.datetime "updated_at",                 :null => false
    t.string   "type"
  end

  create_table "user_tags", :force => true do |t|
    t.integer  "user_id"
    t.integer  "tag_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "user_tags", ["tag_id"], :name => "index_user_tags_on_tag_id"
  add_index "user_tags", ["user_id"], :name => "index_user_tags_on_user_id"

  create_table "users", :force => true do |t|
    t.string   "email",                  :default => "", :null => false
    t.string   "encrypted_password",     :default => "", :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                             :null => false
    t.datetime "updated_at",                             :null => false
    t.string   "authentication_token"
    t.string   "name"
  end

  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["reset_password_token"], :name => "index_users_on_reset_password_token", :unique => true

end
