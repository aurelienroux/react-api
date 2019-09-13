import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Site from "../components/Site";

const Router = () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={Dashboard} exact />
      <Route path="/site/:id" component={Site} />
    </div>
  </BrowserRouter>
);

export default Router;
