import React from "react";
import FriendPage from "../pages/FriendPage";

const Friends = ({ userFriends, people, user }) => {
  return (
    <div>
      <FriendPage userFriends={userFriends} />
    </div>
  );
};

export default Friends;
