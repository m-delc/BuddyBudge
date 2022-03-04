class FriendSerializer < ActiveModel::Serializer

    attributes :id, :person_id, :user_id

    belongs_to :user
    belongs_to :person

end
