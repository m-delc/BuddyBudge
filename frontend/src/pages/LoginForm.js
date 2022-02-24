import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import { useDispatch } from "react-redux";
import { login } from "../features/user";

function LoginForm() {
  const [user, setUser] = useState(null);
  const [loginUsername, setLoginUsername] = useState("");
  const [loginError, setLoginError] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const dispatch = useDispatch();
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

  const loginOnSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username: loginUsername,
      password: values.password,
    };
    // dispatch(login({username: loginUsername, password: values.password}))

    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    }).then((res) => {
      if (res.ok) {
        res.json().then((newUser) => {
          setUser(newUser);
          setIsAuthenticated(true);
          setLoginUsername("");
          dispatch(login({ newUser }));
          navigate("/fake1");
        });
      } else {
        res.json().then((json) => setLoginError(json.error));
      }
    });
  };

  //   console.log(username, values.password);

  // for nav with button
  // for nav with button
  // for nav with button
  const handleSignupRoute = () => {
    navigate("/signup");
  };

  console.log(user);
  console.log(isAuthenticated);
  console.log(loginUsername);

  return (
    <form onSubmit={loginOnSubmit}>
      <div>
        <br></br>

        <Input
          className="test1"
          value={loginUsername}
          onChange={(e) => setLoginUsername(e.target.value)}
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
          // onChange={(e) => setValues(e.target.value)}
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
  );
}

export default LoginForm;
