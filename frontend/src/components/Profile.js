import React, { useState } from "react";
import "../css/Profile.css";

const Profile = ({ user, setUser, isAuthenticated, setIsAuthenticated }) => {
  const [newUsername, setNewUsername] = useState("");
  const [confirmNewUsername, setConfirmNewUsername] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handlePasswordChange = (e) => {
    e.preventDefault();
  };

  const handleUsernameChange = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>{user.first_name}'s Profile</h2>

      <div className="grid">
        <br></br>

        <h3 className="header1">
          Sick of your dumb username "{user.username}"?
        </h3>

        <form className="form1" onSubmit={(e) => handleUsernameChange}>
          <input
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            className="input1"
            placeholder="new username"
          />
          <input
            value={confirmNewUsername}
            onChange={(e) => setConfirmNewUsername(e.target.value)}
            className="input1"
            placeholder="confirm change"
          />
          <input
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="input1"
            placeholder="current password"
          />
          <br></br>
          <button className="button1" type="submit">
            Submit
          </button>
        </form>

        <h3 className="header2">Tired of your password?</h3>

        <form className="form2" onSubmit={(e) => handlePasswordChange}>
          <input
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="input2"
            placeholder="new password"
          />
          <input
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            className="input2"
            placeholder="confirm new password"
          />
          <input
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="input2"
            placeholder="current password"
          />
          <br></br>
          <button className="button2" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Profile;
