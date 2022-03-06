class PersonSerializer < ActiveModel::Serializer

  attributes :id, :first_name, :bio, :img, :savings1, :savings2, :savings3, :savings4, :savings5, :savings6, :goal1, :goal2, :goal3, :goal4, :goal5, :goal6
  
  has_many :friends
  has_one :person_budget
  has_many :users, through: :friends

end
