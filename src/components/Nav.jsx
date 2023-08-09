import { Box, Button, List, ListItemButton } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import PropTypes from "prop-types";



export const Nav = ({handleHome}) => {
  return (
    <Box
      component={"nav"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: 1,
        
      }}
    >
      <Box sx={{ m: 1, ml: 2 }}>
        <ImportContactsIcon />
      </Box>
      <List
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <ListItemButton
          onClick={() => handleHome(false)}
        >
          <Button
            variant="contained"
            size="small"
            component={RouterLink}
            to="/goit-react-hw-08-phonebook/register"
          >
            Sign Up
          </Button>
        </ListItemButton>
        <ListItemButton onClick={() => handleHome(false)}>
          <Button
            variant="contained"
            size="small"
            component={RouterLink}
            to="/goit-react-hw-08-phonebook/login"
          >
            Log In
          </Button>
        </ListItemButton>
      </List>
    </Box>
  );
};

Nav.propTypes = {
  handleHome: PropTypes.func.isRequired,
};

