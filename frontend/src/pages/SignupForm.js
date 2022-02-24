import React, { useState } from "react";
// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PublishIcon from "@mui/icons-material/Publish";

const Signup = () => {
  // IF YOU ADD THESE BACK, remember to add the params back in user controller
  //   const [signupFirstName, setSignupFirstName] = useState("");
  //   const [signupLastName, setSignupLastName] = useState("");

  // const [signupUsername, setSignupUsername] = useState("");
  // const [signupPassword, setSignupPassword] = useState("");
  // const [passwordConfirmation, setPasswordConfirmation] = useState("");
  // const [signupErrors, setSignupErrors] = useState([]);

  // function signupOnSubmit(e) {
  //   e.preventDefault();
  //   // setSignupErrors([])
  //   const user = {
  //     //   first_name: signupFirstName,
  //     //   last_name: signupLastName,
  //     username: signupUsername,
  //     password: signupPassword,
  //     password_confirmation: passwordConfirmation,
  //   };
  //   fetch("/users", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(user),
  //   }).then((res) => {
  //     if (res.ok) {
  //       res.json().then((user) => {
  //         setUser(user);
  //         setIsAuthenticated(true);
  //         navigate("/home");
  //       });
  //     } else {
  //       res.json().then((json) => setSignupErrors(Object.entries(json.error)));
  //     }
  //   });
  // }

  return (
    <form>

      <br></br>
      <br></br>

      <div>
        <TextField 
        id="standard-required" 
        label="Username" 
        variant="standard" 
        />
      </div>

      <br></br>

      <div>
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
      </div>

      <br></br>

      <div>
        <TextField
          id="standard-password-confirm-input"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
      </div>

      <br></br>
      <br></br>

      <div>
        <Button
          variant="outlined"
          endIcon={<PublishIcon />}
          className="btn-signup"
          type="Submit"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Signup;
