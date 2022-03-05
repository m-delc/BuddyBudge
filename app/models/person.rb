class Person < ApplicationRecord
    
    has_one :budget
    has_many :friends
    has_many :users, through: :friends
    validates :id, uniqueness: true
    
end
