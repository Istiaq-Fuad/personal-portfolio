import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import ContactMail from "@material-ui/icons/ContactMail";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../fuad.jpg";

import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "transparent",
    margin: 0,
  },
  header: {
    width: "95%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
  },
  hamburger: {
    color: "#551111",
    fontSize: "2.5rem",
  },
  clear: {
    fontSize: "2rem",
    color: "#d2b48c",
  },
  close: {
    alignSelf: "flex-end",
    marginRight: "2rem",
    marginTop: "1rem",
  },
  title: {
    color: "tan",
    textDecoration: "none",
  },
  menuSliderContainer: {
    width: 350,
    background: "#511",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItems: {
    marginBottom: "2rem",
  },
  listItem: {
    color: "tan",
  },
}));

const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  { listIcon: <AssignmentInd />, listText: "Resume", listPath: "/resume" },
  { listIcon: <Apps />, listText: "Portfolio", listPath: "/portfolio" },
  { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <IconButton className={classes.close} onClick={() => setOpen(false)}>
        <ClearIcon className={classes.clear} />
      </IconButton>
      <Avatar className={classes.avatar} src={avatar} alt="Istiaq Fuad" />
      <Divider />
      <List className={classes.listItems}>
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            className={classes.listItem}
            onClick={() => setOpen(false)}
            component={Link}
            to={item.listPath}
          >
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar position="static" className={classes.appbar}>
          <Toolbar className={classes.header}>
            <Typography
              component={Link}
              to="/"
              variant="h5"
              className={classes.title}
            >
              Fuad
            </Typography>
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon className={classes.hamburger} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        {sideList()}
        <Footer />
      </Drawer>
    </>
  );
};

export default Navbar;
