class BudgetSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :person_id, :weekOnegoals, :weekTwoGoals, :weekThreeGoals, :weekFourGoals, :weekFiveGoals, :weekSixGoals, :weekOneSavings, :weekTwoSavings, :weekThreeSavings, :weekFourSavings, :weekFiveSavings, :weekSixSavings
end
