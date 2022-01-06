import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
// import Grid from "@mui/material/Grid";
// import TextField from "@mui/material/TextField";

const TopAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            6D - Logo
          </Typography>

          <Button color="inherit" component={Link} to="/">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/register">
            Register
          </Button>
          <Button color="inherit" component={Link} to="/logout">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopAppBar;
