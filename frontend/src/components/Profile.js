import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/profile.css";
import { NavLink } from "react-router-dom";

const Profile = ({ user, setUser, isAuthenticated, setIsAuthenticated }) => {
  const [newUsername, setNewUsername] = useState("");
  // const [confirmNewUsername, setConfirmNewUsername] = useState("");
  // const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [newFirstName, setNewFirstName] = useState("");
  const [firstNameMessage, setFirstNameMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [usernameMessage, setUsernameMessage] = useState("");

  const handleUsernameChange = (e) => {
    e.preventDefault();
    const newInfo = {
      username: newUsername,
      // confirmNewUsername: confirmNewUsername,
    };

    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newInfo),
    }).then((res) => {
      if (res.ok) {
        res.json().then((x) => {
          setUser(x);
          setIsAuthenticated(true);
          setNewUsername("");
          setUsernameMessage(`Your username had been changed to ${x.username}`);
        });
      } else {
        res.json().then(setErrors(Object.entries.err.errors));
      }
    });
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    const newInfo = {
      password: newPassword,
      password_confirmation: confirmNewPassword,
    };

    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newInfo),
    }).then((res) => {
      if (res.ok) {
        res.json().then((x) => {
          setUser(x);
          setIsAuthenticated(true);
          setNewPassword("");
          setConfirmNewPassword("");
          setPasswordMessage("Your password has been changed");
        });
      } else {
        res.json().then(setErrors(Object.entries.err.errors));
      }
    });
  };

  const handleNameChange = (e) => {
    e.preventDefault();
    const newInfo = {
      first_name: newFirstName,
    };
    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newInfo),
    }).then((res) => {
      if (res.ok) {
        res.json().then((x) => {
          setUser(x);
          setIsAuthenticated(true);
          setNewFirstName("");
          setFirstNameMessage(
            `Your first name has been changed to ${x.first_name}`
          );
        });
      } else {
        res.json().then(setErrors(Object.entries.err.errors));
      }
    });
  };

  return (
    <>
      <h2 className="header-top">{user ? user.first_name : null}'s Profile</h2>

      <div className="grid">
        <br></br>

        <h3 className="header1">
          Change Your Username
        </h3>

        <form className="form1" onSubmit={handleUsernameChange}>
          <input
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            className="input1"
            placeholder="change username"
          />
          {/* <input
            value={confirmNewUsername}
            onChange={(e) => setConfirmNewUsername(e.target.value)}
            className="input1"
            placeholder="confirm change"
          /> */}
          {/* <input
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="input1"
            placeholder="current password"
          /> */}
          <br></br>
          <button className="button1" type="submit">
            Submit
          </button>
          {usernameMessage ? usernameMessage : null}
          {errors}
        </form>

        <h3 className="header2">Change Your Password</h3>

        <form className="form2 grid-row-span2" onSubmit={handlePasswordChange}>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="input2"
            placeholder="new password"
          />
          <input
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            className="input2"
            placeholder="confirm new password"
          />
          {/* <input
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="input2"
            placeholder="current password"
          /> */}
          <br></br>
          <button className="button1" type="submit">
            Submit
          </button>
          {passwordMessage ? passwordMessage : null}
        </form>

        <h3 className="header3">Change Your First Name</h3>
        <form className="form3" onSubmit={handleNameChange}>
          <input
            className="input3"
            value={newFirstName}
            onChange={(e) => setNewFirstName(e.target.value)}
            placeholder="change first name"
          />
          <br></br>
          <button className="button1" type="submit">
            Submit
          </button>
          {firstNameMessage ? firstNameMessage : null}
        </form>
        <div className="div-delete-profile">
          <NavLink to="/profile/delete">delete your profile</NavLink>
        </div>
      </div>
    </>
  );
};

export default Profile;
