class BudgetSerializer < ActiveModel::Serializer

  # attributes :id, :user_id, :person_id, :weekOneGoals, :weekTwoGoals, :weekThreeGoals, :weekFourGoals, :weekFiveGoals, :weekSixGoals, :weekOneSavings, :weekTwoSavings, :weekThreeSavings, :weekFourSavings, :weekFiveSavings, :weekSixSavings
  attributes :id, :user_id, :weekOneGoals, :weekTwoGoals, :weekThreeGoals, :weekFourGoals, :weekFiveGoals, :weekSixGoals

  belongs_to :person
  belongs_to :user

end
