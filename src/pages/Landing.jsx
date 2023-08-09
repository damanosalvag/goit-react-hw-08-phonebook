import { Box, Typography } from "@mui/material";
import logo from "../assets/logo.png";
import { Nav } from "../components/Nav";
import PropTypes from "prop-types";


export const Landing = ({home}) => {
  return (
    <Box sx={{ mt: 8 }}>
      <Nav handleHome={home} />
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <img src={logo} alt="logo" />
      </Box>
      <Typography variant="body1" align="center" fontStyle="oblique">
        Organize and access your phone contacts with our web app. No more manual
        transfers or lost contacts when switching phones. Store all your
        contacts securely in one place and access them from any device. Try it
        today! 😊.
      </Typography>
    </Box>
  );
};

Landing.propTypes = {
  home: PropTypes.func.isRequired,
};
