import React from "react";
import NavWeb from "./NavWeb";
import NavMob from "./NavMob";
import { Box, Hidden, useTheme } from "@mui/material";

const Navbar = ({ themeToggler, mode }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        // border: "1px solid red",
        // mb: 3,
      }}
    >
      <Box
        sx={{
          width: "100%",
          boxShadow: theme.palette.background.NavShadow,
          background: theme.palette.background.hard,
          mb: 3,
          position: "fixed",
          zIndex: 1000,
        }}
      >
        <Box>
          <Hidden lgDown>
            <NavWeb mode={mode} themeToggler={themeToggler} />
          </Hidden>
          <Hidden lgUp>
            <NavMob />
          </Hidden>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
