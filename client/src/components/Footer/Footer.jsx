import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import logo from "../../images/smit.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
// import t from "../../images/smit.png";
// import tel from ".../../images/smit.png";
// import med from "../../images/smit.png";
// import vec from "../../images/smit.png";

export default function Footer() {
  const matches = useMediaQuery("(max-width:960px)");
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundColor: "#f8f8f8",
        // p: 2,
      }}
    >
      <Box
        pt={7}
        sx={{
          boxShadow: theme.palette.background.fotShadow,
          background: theme.palette.background.hard,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3} pb={7}>
            <Grid item xs={12} md={6}>
              <img src={logo} alt="logo" style={{ width: "100px" }} />
              <Typography
                sx={{
                  fontWeight: "400",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit. Sed ornare cursus sed nunc eget
                <br /> dictum Sed ornare cursus sed nunc eget
                <br /> dictumd nunc eget dictum Sed ornare cursus
                <br /> sed nunc eget dictum
                <Box mt={4}>
                  <TwitterIcon
                    sx={{ width: "30px", mr: 3, cursor: "pointer" }}
                  />
                  <FacebookIcon
                    sx={{ width: "30px", mr: 3, cursor: "pointer" }}
                  />
                  <GoogleIcon
                    sx={{ width: "30px", mr: 3, cursor: "pointer" }}
                  />
                  <GitHubIcon
                    sx={{ width: "30px", mr: 3, cursor: "pointer" }}
                  />
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} mt={matches ? 7 : 0}>
              <Box
                display="flex"
                justifyContent={matches ? "space-between" : "space-around"}
              >
                <Box>
                  <Typography
                    mb={4}
                    fontFamily="Montserrat"
                    fontSize="20px"
                    fontWeight="700"
                  >
                    Explore
                  </Typography>
                  <Typography
                    mb={0.5}
                    fontFamily="Montserrat"
                    fontSize="16px"
                    fontWeight="400"
                    sx={{ cursor: "pointer" }}
                  >
                    Home
                  </Typography>
                  <Typography
                    mb={0.5}
                    fontFamily="Montserrat"
                    fontSize="16px"
                    fontWeight="400"
                    sx={{ cursor: "pointer" }}
                  >
                    Authentication
                  </Typography>
                  <Typography
                    mb={0.5}
                    fontFamily="Montserrat"
                    fontSize="16px"
                    sx={{ cursor: "pointer" }}
                    fontWeight="400"
                  >
                    JWT & Token
                  </Typography>
                  <Typography
                    fontFamily="Montserrat"
                    fontSize="16px"
                    sx={{ cursor: "pointer" }}
                    fontWeight="400"
                  >
                    RTK & MUI
                  </Typography>

                  <Typography
                    fontFamily="Montserrat"
                    fontSize="16px"
                    sx={{ cursor: "pointer" }}
                    fontWeight="400"
                  >
                    MongoDb
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    mb={4}
                    fontFamily="Montserrat"
                    fontSize="20px"
                    fontWeight="700"
                  >
                    Follow
                  </Typography>
                  <Typography
                    mb={0.5}
                    fontFamily="Montserrat"
                    fontSize="16px"
                    sx={{ cursor: "pointer" }}
                    fontWeight="400"
                  >
                    Twitter
                  </Typography>
                  <Typography
                    mb={0.5}
                    fontFamily="Montserrat"
                    fontSize="16px"
                    sx={{ cursor: "pointer" }}
                    fontWeight="400"
                  >
                    Facebook
                  </Typography>
                  <Typography
                    mb={0.5}
                    fontFamily="Montserrat"
                    fontSize="16px"
                    sx={{ cursor: "pointer" }}
                    fontWeight="400"
                  >
                    Email
                  </Typography>
                  <Typography
                    fontFamily="Montserrat"
                    fontSize="16px"
                    sx={{ cursor: "pointer" }}
                    fontWeight="400"
                  >
                    GitHub
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    mb={4}
                    fontFamily="Montserrat"
                    fontSize="20px"
                    fontWeight="700"
                  >
                    Legal
                  </Typography>
                  <Typography
                    mb={0.5}
                    fontFamily="Montserrat"
                    fontSize="16px"
                    sx={{ cursor: "pointer" }}
                    fontWeight="400"
                  >
                    Terms
                  </Typography>
                  <Typography
                    mb={0.5}
                    fontFamily="Montserrat"
                    fontSize="16px"
                    sx={{ cursor: "pointer" }}
                    fontWeight="400"
                  >
                    Privacy
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Typography
            textAlign="center"
            fontFamily="Montserrat"
            fontSize="15px"
            fontWeight="400"
            color="#D9D9D9"
          >
            ©2023 SMIT. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
