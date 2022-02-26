import React from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

const useStyles = makeStyles((theme) => ({
  navbar: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
    background: "linear-gradient(45deg, pink 10%, lightblue 60%)",
  },
}));
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = ({ setIsAuthenticated, user, setUser }) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [switchLink, setSwitchLink] = React.useState(null);
  const classes = useStyles();
  const navigate = useNavigate();

  const logout = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      setUser(null);
      setIsAuthenticated(false);
      navigate("/login");
    });
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElUser(null);
    logout();
    
  };

  return (
    <div className={classes.navbar}>
      <Container>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <NavLink to="login">Login</NavLink>
            <NavLink to="logout" onClick={logout}>
              Logout
            </NavLink>
            <NavLink to="signup">Signup</NavLink>
            <NavLink to="fake1">Fake1</NavLink>
            <NavLink to="fake2">Fake2</NavLink>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>

            <Box sx={{ flexGrow: 0 }}>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleClose}
              >
                {/* {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))} */}
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </div>
  );
};

{
  /* <MenuItem key={setting} onClick={handleCloseUserMenu}> */
}
{
  /* <Typography textAlign="center">"{setting.toLowerCase()}"</Typography> */
}
{
  /* </MenuItem> */
}

export default Navbar;
