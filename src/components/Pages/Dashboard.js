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
    padding: theme.spacing(3, 6)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.container}>
      <div className="dashboard">
        <Link className="dashboard__card" to="/sites">
          <Paper className={classes.paper}>
            <Typography variant="h4">Sites</Typography>
          </Paper>
        </Link>
        <Link className="dashboard__card" to="/clients">
          <Paper className={classes.paper}>
            <Typography variant="h4">Clients</Typography>
          </Paper>
        </Link>
      </div>
    </Container>
  );
};

export default Dashboard;
