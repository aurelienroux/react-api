import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "space-around",
    padding: 50
  },
  paper: {
    padding: theme.spacing(10, 20)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Link to="/sites">
        <Paper className={classes.paper}>
          <Typography variant="h4">Sites</Typography>
        </Paper>
      </Link>
      <Link to="/clients">
        <Paper className={classes.paper}>
          <Typography variant="h4">Clients</Typography>
        </Paper>
      </Link>
    </Container>
  );
};

export default Dashboard;
