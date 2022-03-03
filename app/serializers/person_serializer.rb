class PersonSerializer < ActiveModel::Serializer

  attributes :id, :first_name, :bio, :savings, :img
  
  # has_many :friends
  has_many :users, through: :friends

end
