class Friend < ApplicationRecord
    
    belongs_to :user
    belongs_to :person

    validates :id, uniqueness: true
    
end
