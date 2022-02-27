import React from "react";
import "../css/Profile.css";

const Profile = ({ user, setUser }) => {
  // console.log(user)
  return (
    <>
      <h2>{user.first_name}'s account</h2>
      <div>Username: {user.username}</div>
      <button>Change password</button>
    </>
  );
};

export default Profile;
