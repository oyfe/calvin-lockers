import * as React from "react";
import Button from "@mui/material/Button";
import { Container, Appbar, Typography, Grow, Grid } from "@material-ui/core";

const App = () => {
  return (
    <Container maxWidth="lg">
      <Appbar position="static" color="inherit">
        <Typography variant="h2" align="center ">
          memories
        </Typography>
      </Appbar>
    </Container>
  );
};

export default App;
