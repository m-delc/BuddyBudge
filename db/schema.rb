# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_03_06_023639) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "budgets", force: :cascade do |t|
    t.integer "user_id"
    t.integer "weekOneGoals"
    t.integer "weekTwoGoals"
    t.integer "weekThreeGoals"
    t.integer "weekFourGoals"
    t.integer "weekFiveGoals"
    t.integer "weekSixGoals"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "friends", force: :cascade do |t|
    t.integer "user_id"
    t.integer "person_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "people", force: :cascade do |t|
    t.string "first_name"
    t.text "bio"
    t.text "img"
    t.integer "savings1"
    t.integer "savings2"
    t.integer "savings3"
    t.integer "savings4"
    t.integer "savings5"
    t.integer "savings6"
    t.integer "goal1"
    t.integer "goal2"
    t.integer "goal3"
    t.integer "goal4"
    t.integer "goal5"
    t.integer "goal6"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "person_budgets", force: :cascade do |t|
    t.integer "person_id"
    t.integer "weekOneGoals"
    t.integer "weekTwoGoals"
    t.integer "weekThreeGoals"
    t.integer "weekFourGoals"
    t.integer "weekFiveGoals"
    t.integer "weekSixGoals"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "first_name"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
