import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/profiledelete.css";

const ProfileDelete = ({ user, setUser, setIsAuthenticated }) => {
  const [someState, setSomeState] = useState(true);
  const navigate = useNavigate();

  const x = (e) => {
    e.preventDefault();
    setSomeState(false);
    setTimeout(handleDeleteAccount, 3000);
  };

  const handleDeleteAccount = () => {
    fetch(`/users/${user.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(
      console.log("Account Deleted"),
      setUser(""),
      setIsAuthenticated(false),
      navigate("/home")
    );
  };

  return (
    <>
      {someState ? (
        <div className="div1">
          {user ? user.username : null}, are you sure you want to delete your
          account?
          <form onSubmit={x}>
            <br></br>
            <input required type="checkbox" />
            Yes, I'm sure
            <br></br>
            <br></br>
            <button className="btn-delete" type="submit">
              DELETE ACCOUNT
            </button>
          </form>
        </div>
      ) : (
        <div>We're sorry to see you go. Redirecting...</div>
      )}
    </>
  );
};

export default ProfileDelete;
