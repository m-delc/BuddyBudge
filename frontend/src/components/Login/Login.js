// import React from 'react'
import React from "react";
import Box from "@mui/material/Box";
// this login taken from https://mui.com/components/text-fields/ "form props"
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Stack from "@mui/material/Stack";
import "./login.css";

function Login() {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

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

  return (
    <Box
      component="form"
      //   sx={{
      //     "& .MuiTextField-root": { m: 1, width: "31ch" },
      //   }}
      noValidate
      autoComplete="off"
    >
      <div>
        <br></br>

        <Input
          className="test1"
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
        <div className="test2">
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              endIcon={<LoginIcon />}
              className="btn-login"
            >
              Login
            </Button>

            <Button
              variant="outlined"
              endIcon={<AddCircleOutlineIcon />}
              className="btn-signup"
            >
              Signup
            </Button>
          </Stack>
        </div>
      </div>
    </Box>
  );
}

export default Login;
