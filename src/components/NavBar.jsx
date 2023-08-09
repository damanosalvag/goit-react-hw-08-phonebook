import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";

import { useSelector, useDispatch } from "react-redux";
import { operations } from "../app/auth/operations";

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const auth = useSelector((state) => state.auth.isLoggedIn);
  const name = useSelector((state) => state.auth.user.name);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(operations.logOut());
  };

  const handleMenu = (event) => {
    dispatch(operations.currentUser());
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Contacts
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>{name}</MenuItem>
                <MenuItem
                  onClick={handleChange}
                  sx={{
                    color: "red",
                    display: "flex",
                    justifyContent: "start",
                    gap: "6px",
                  }}
                >
                  Logout
                  <LogoutIcon />
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
