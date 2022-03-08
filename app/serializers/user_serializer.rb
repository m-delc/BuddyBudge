class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :password, :password_confirmation

  has_many :friends
  has_many :people, through: :friends
  
  has_one :budget
end
