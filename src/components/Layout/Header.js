import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2>Header</h2>
      <Link to="/">Home </Link>
      <Link to="/sites">| Sites </Link>
      <Link to="/clients"> | Clients </Link>
      <hr />
    </div>
  );
};

export default Header;
