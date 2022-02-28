import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/navbar.css";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";

const Navbar = ({ setIsAuthenticated, user, setUser }) => {
  // renders first initial of user
  // renders first initial of user
  const split = user ? user.first_name.split("") : null;
  const slice = split ? split.slice(0, 1) : null;
  const firstInitial = slice ? slice[0] : null;
  // for dropdown
  // for dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      setUser(null);
      setIsAuthenticated(false);
      navigate("/login");
    });
  };

  return (
    <header className="header">
      <span className="span1">
        <NavLink to="home">Home</NavLink>
        <NavLink to="budget">{user ? `${user.username}'s budget` : null}</NavLink>
        <br></br>
      </span>
      <span className="span2">
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2, marginRight: "15px" }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>{firstInitial}</Avatar>
          </IconButton>
        </Tooltip>
        <Menu
          className="test1"
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 12,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          {user ? (
            <div>
              <NavLink to="/profile" className="span3">
                <MenuItem>
                  <Avatar src="/pic1.jpg" /> {user ? user.first_name : null}
                </MenuItem>
              </NavLink>
              <Divider />
            </div>
          ) : (
            <div>
              <NavLink to="/login" className="span3">
                <MenuItem>
                  <Avatar /> Login
                </MenuItem>
              </NavLink>
            </div>
          )}

          {user ? (
            <div>
              <Divider />

              <MenuItem>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                <NavLink to="/" className="span3" onClick={logout}>
                  Logout
                </NavLink>
              </MenuItem>
            </div>
          ) : null}
        </Menu>
      </span>
    </header>
  );
};

export default Navbar;
