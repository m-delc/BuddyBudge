class User < ApplicationRecord

    has_secure_password
    has_many :friends
    has_many :people, through: :friends
    
end
