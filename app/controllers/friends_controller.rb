class FriendsController < ApplicationController

    def update
        friend = current_user
        friend.update(friend_params)
        if friend
            return render json: friend, status: 201
        else
            return render json: { errors: friend.errors.full_messages }, status: 422
        end
    end

    private

    def friend_params
        params.permit(:user_id, :person_id)        
    end

end
