import React, { ReactElement } from "react";
import { Box, Grid } from "@material-ui/core";
import useStyles from "./main.style";
import Profile from "../components/profile";

const MainContainer = (): ReactElement => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid container>
        <Grid container xs={12}>
          <Grid item xs={12}>
            <Profile />
          </Grid>
        </Grid>
        <Grid container xs={12}></Grid>
      </Grid>
    </Box>
  );
};

export default MainContainer;
