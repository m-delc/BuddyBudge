class CreateBudgets < ActiveRecord::Migration[7.0]
  def change
    create_table :budgets do |t|
      t.integer :user_id
      # t.integer :person_id
      t.integer :weekOneGoals
      t.integer :weekTwoGoals
      t.integer :weekThreeGoals
      t.integer :weekFourGoals
      t.integer :weekFiveGoals
      t.integer :weekSixGoals
      # t.integer :weekOneSavings
      # t.integer :weekTwoSavings
      # t.integer :weekThreeSavings
      # t.integer :weekFourSavings
      # t.integer :weekFiveSavings
      # t.integer :weekSixSavings

      t.timestamps
    end
  end
end
