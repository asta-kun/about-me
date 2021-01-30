import { Box, Grid } from "@material-ui/core";
import React, { ReactElement } from "react";
import useStyles from "./profile.style";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { useSpring, animated } from "react-spring";
import ProfileAnimation from "./profile-animation";

type ProfileProps = {};
const Profile = ({}: ProfileProps): ReactElement => {
  const classes = useStyles();
  const animaProps = useSpring({
    from: { opacity: 0, transform: "rotate3d(1, 1, 1, 90deg) scale(0.25)" },
    to: { opacity: 1, transform: "rotate3d(1, 1, 1, 0) scale(1)" },
  });

  return (
    <Box className={classes.root}>
      <Grid container>
        {/* photo */}
        <Grid item xs={7}>
          <animated.div className={classes.photo} style={animaProps}>
            <img loading="lazy" src="/img/profile/photo.png" alt="I'm" />
          </animated.div>
        </Grid>
        <Grid item xs={5}>
          {/* links */}
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.links}
            direction="column"
          >
            <Grid item>
              <LinkedInIcon fontSize="large" />
            </Grid>
            <Grid item>
              <TwitterIcon fontSize="large" />
            </Grid>
            <Grid item>
              <YouTubeIcon fontSize="large" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* animation text */}
      <ProfileAnimation />
      {/* description */}
      <Box className={classes.description}>
        <p>
          Hello, I'm Héctor and also fullstack web developer, specialize in make
          bugs and convert coffee to code; started in the techworld since 2013
          (with HTML 7u7).
        </p>
      </Box>
    </Box>
  );
};

export default Profile;
