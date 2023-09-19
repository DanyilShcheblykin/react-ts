import React from "react";
import { AppBar, Container, Typography, Toolbar } from "@mui/material";

const Material = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Home</Typography>
          <Typography variant="h6">About</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container>
            <Typography variant="h2" align="center">
              Hello
            </Typography>
          </Container>
        </div>
      </main>
    </>
  );
};

export default Material;
