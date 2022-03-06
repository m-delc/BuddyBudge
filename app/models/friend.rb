class Friend < ApplicationRecord
    
    belongs_to :user
    belongs_to :person
    has_one :person_budget, through: :person

    validates :id, uniqueness: true
    
end
