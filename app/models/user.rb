class User < ApplicationRecord

    has_secure_password
    has_one :budget
    has_many :friends
    has_many :people, through: :friends
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true
    
end
