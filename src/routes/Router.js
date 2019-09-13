import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import ListingClients from "../components/ListingClients";
import ListingSites from "../components/ListingSites";
import Site from "../components/Site";

const Router = () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={Dashboard} exact />
      <Route path="/sites" component={ListingSites} />
      <Route path="/clients" component={ListingClients} />
      <Route path="/site/:id" component={Site} />
    </div>
  </BrowserRouter>
);

export default Router;
