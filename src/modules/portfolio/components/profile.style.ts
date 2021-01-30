import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    padding: ".5em 0",
    // boxShadow: "0px 0px 7px 1px #00000024",
    borderRadius: 5,
  },
  photo: {
    display: "flex",
    justifyContent: "center",
    "& img": {
      width: "85%",
      borderRadius: 10,
    },
  },
  links: {
    height: "100%",
    "& > div": {
      margin: ".25em 0",
    },
  },
  description: {
    width: "90%",
    margin: "2em auto",
    fontSize: ".95em",
  },
}));
export default useStyles;
