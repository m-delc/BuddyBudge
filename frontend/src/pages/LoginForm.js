// import React from 'react'
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
// this login taken from https://mui.com/components/text-fields/ "form props"
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Stack from "@mui/material/Stack";
import "./LoginForm.css";
// import Login from '../components/Login/Login'

function LoginForm() {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const navigate = useNavigate();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //   useEffect(() => {
  //     fetch("/authorize_user")
  //       .then((res) => res.json())
  //       .then(setUser);
  //   }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: values.password,
    };
  };
  //   console.log(username, values.password);

  const handleSignupRoute = () => {
    navigate("/signup");
  };

  return (
    // <Box
    //   component="form"
    //   //   sx={{
    //   //     "& .MuiTextField-root": { m: 1, width: "31ch" },
    //   //   }}
    //   noValidate
    //   autoComplete="off"
    // >

    <form onClick={(e) => handleLogin}>
      <div>
        <br></br>

        <Input
          className="test1"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          label="Username"
          placeholder="Username"
        />

        <br></br>
        <br></br>

        <Input
          id="standard-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          placeholder="Password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <br></br>
        <br></br>
        <br></br>
        <div className="test2">
          <Stack direction="row" spacing={2}>
            <Button
              type="submit"
              variant="outlined"
              endIcon={<LoginIcon />}
              className="btn-login"
            >
              Login
            </Button>

            <Button
              onClick={handleSignupRoute}
              variant="outlined"
              endIcon={<AddCircleOutlineIcon />}
              className="btn-signup"
            >
              Signup
            </Button>
          </Stack>
          <br></br>
          <br></br>
        </div>
      </div>
    </form>
    // </Box>
  );
}

export default LoginForm;
