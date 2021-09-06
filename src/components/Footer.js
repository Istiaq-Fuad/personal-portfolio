import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "transparent",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    height: "10vh",
  },
  socialIcon: {
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center ",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.socialIcon}>
      <BottomNavigation className={classes.bottomNavContainer}>
        <BottomNavigationAction icon={<Facebook />} className={classes.root} />
        <BottomNavigationAction icon={<Twitter />} className={classes.root} />
        <BottomNavigationAction icon={<Instagram />} className={classes.root} />
      </BottomNavigation>
    </div>
  );
};
export default Footer;
