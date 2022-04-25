class User < ApplicationRecord

    has_secure_password
    has_one :budget
    has_many :friends
    has_many :people, through: :friends
    validates :username, presence: true, uniqueness: true, confirmation: {case_sensitive: false}
    validates :password, presence: true
    # validates :password_confirmation, presence: true
    validates :first_name, presence: true
    
end
