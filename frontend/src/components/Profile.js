import React, { useState } from "react";
import "../css/profile.css";
import { NavLink } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom, isAuthenticatedAtom } from "../States.js";

const Profile = () => {
  const [user, setUser] = useAtom(userAtom);
  // const [isAuthenticated, setIsAuthenticated] = useAtom(isAuthenticatedAtom)
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [newFirstName, setNewFirstName] = useState("");
  const [errors, setErrors] = useState([]);
  const [firstNameMessage, setFirstNameMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [usernameMessage, setUsernameMessage] = useState("");

  const [firstnamepassword, setfirstnamepassword] = useState("");
  const [firstnamepasswordconfirmation, setfirstnamepasswordconfirmation] =
    useState("");

  const handleUsernameChange = (e) => {
    e.preventDefault();
    const newInfo = {
      username: newUsername,
    };

    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newInfo),
    }).then((res) => {
      if (res.ok) {
        res.json().then((userNewUsername) => {
          console.log(userNewUsername);
          setUser(userNewUsername);
          setNewUsername("");
          setUsernameMessage(
            `Your username had been changed to ${userNewUsername.username}`
          );
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
        res.json().then((userNewPassword) => {
          setUser(userNewPassword);
          setNewPassword("");
          setConfirmNewPassword("");
          setPasswordMessage("Your password has been changed");
        });
      } else {
        res.json().then(setErrors(Object.entries.err.errors));
      }
    });
  };

  // this is a re-write test to see if the problem is front end. This did not work, so I believe the problem is backend
  // this is a re-write test to see if the problem is front end. This did not work, so I believe the problem is backend
  // this is a re-write test to see if the problem is front end. This did not work, so I believe the problem is backend
  // const handleNameChange = (e) => {
  //   e.preventDefault();
  //   fetch(`/users/${user.id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ first_name: newFirstName }),
  //   })
  //     .then((r) => r.json())
  //     .then((updateName) => setUser(updateName));
  // };

  const handleNameChange = (e) => {
    e.preventDefault();
    const newInfo = {
      first_name: newFirstName,
      password: firstnamepassword,
      password_confirmation: firstnamepasswordconfirmation,
    };
    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newInfo),
    }).then((res) => {
      if (res.ok) {
        res.json().then((userNewFirstName) => {
          console.log(userNewFirstName);
          setUser(userNewFirstName);
          setNewFirstName("");
          setFirstNameMessage(
            `Your first name has been changed to ${userNewFirstName.first_name}`
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

        <h3 className="header1">Change Your Username</h3>

        <form className="form1" onSubmit={handleUsernameChange}>
          <input
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            className="input1"
            placeholder="change username"
          />

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

          <input
            className="input3"
            value={firstnamepassword}
            onChange={(e) => setfirstnamepassword(e.target.value)}
            placeholder="password?"
          />

          <input
            className="input3"
            value={firstnamepasswordconfirmation}
            onChange={(e) => setfirstnamepasswordconfirmation(e.target.value)}
            placeholder="password again?"
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
