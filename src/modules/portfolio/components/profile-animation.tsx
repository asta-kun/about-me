import { Box, Grid } from "@material-ui/core";
import React, { ReactElement } from "react";
import useStyles from "./profile-animation.style";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { useSpring, animated } from "react-spring";

const TextMutation = (): ReactElement => {
  return <>sxx</>;
};

const ProfileAnimation = (): ReactElement => {
  const classes = useStyles();
  const animaProps = useSpring({
    from: { opacity: 0, transform: "rotate3d(1, 1, 1, 90deg) scale(0.25)" },
    to: { opacity: 1, transform: "rotate3d(1, 1, 1, 0) scale(1)" },
  });

  return (
    <Grid container className={classes.root} justify="center">
      <Grid item>
        <span>I'm&nbsp;</span>
      </Grid>
      <Grid item className={classes.color}>
        <span>[</span>
      </Grid>
      <Grid item xs={4}>
        <TextMutation />
      </Grid>
      <Grid item className={classes.color}>
        <span>]</span>
      </Grid>
    </Grid>
  );
};

export default ProfileAnimation;
