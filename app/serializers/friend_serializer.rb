class FriendSerializer < ActiveModel::Serializer
attributes :id, :user_id, :person_id
  belongs_to :user
  belongs_to :person
end
