import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Link to="/sites">Sites</Link>
      <Link to="/clients">Clients</Link>
    </div>
  );
};

export default Dashboard;
