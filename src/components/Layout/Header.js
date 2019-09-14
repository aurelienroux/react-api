import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  Toolbar,
  Typography,
  ListItemText
} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import AppBar from "@material-ui/core/AppBar";
import ListItem from "@material-ui/core/ListItem";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  menu: {
    height: 50,
    justifyContent: "center",
    flexGrow: 1
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem button>
          <Link to="/">
            <ListItemText primary="Home" />
          </Link>
        </ListItem>
        {["Sites", "Clients"].map(text => (
          <ListItem button key={text}>
            <Link to={`/${text.toLocaleLowerCase()}`}>
              <ListItemText primary={text} />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <AppBar className={classes.menu} position="relative" color="primary">
      <Toolbar>
        <IconButton
          onClick={toggleDrawer("left", true)}
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          <Link className="home-link" to="/">
            Scheduling
          </Link>
        </Typography>
        <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
          {sideList("left")}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
