import React from "react";
import "../css/profiledelete.css";

const ProfileDelete = ({ user, setUser, setIsAuthenticated }) => {
  const handleDeleteAccount = (e) => {
    e.preventDefault();
    fetch(`/users/${user.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(console.log("Account Deleted"));
  };

  return (
    <div>
      {user ? user.username : null}, are you sure you want to delete your
      account?
      <form onSubmit={handleDeleteAccount}>
        <br></br>
        <input required type="checkbox" />
        Yes, I'm sure
        <br></br>
        <button type="submit">DELETE ACCOUNT</button>
      </form>
    </div>
  );
};

export default ProfileDelete;
