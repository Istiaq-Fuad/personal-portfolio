import React from "react";
import Typography from "@material-ui/core/Typography";
// import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
// import avatar from "../fuad.jpg";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
import Footer from "./Footer";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Dancing Script",
    fontSize: "4.5rem",
    fontWeight: "600",
    color: "#25A0FF",
  },
  subtitle: {
    color: "tomato",
    textTransform: "uppercase",
    fontWeight:"600"
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    // width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
  btn:{
    
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Grid container justifycontent="center" alignItems="center">
      <Grid item>
        <Footer />
      </Grid>
      <Grid item className={classes.typedContainer}>
        {/* <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Istiaq Fuad" />
      </Grid> */}
        <Typography className={classes.title} variant="h4">
          Istiaqur Rahman
          <br />
          Fuad
          {/* <Typed strings={["Istiaqur Rahman Fuad"]} typeSpeed={40} /> */}
        </Typography>

        <Typography className={classes.subtitle} variant="h5">
          Web developer
        </Typography>
        <Button variant="outlined" color="primary" className={classes.btn}>See Projects</Button>
      </Grid>
    </Grid>
  );
};

export default Header;
