import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "../components/Pages/Dashboard";
import ListingClients from "../components/Pages/ListingClients";
import ListingSites from "../components/Pages/ListingSites";
import Site from "../components/Pages/Site";
import Header from "../components/Layout/Header";
import Client from "../components/Pages/Client";

const Router = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Route path="/" component={Dashboard} exact />
      <Route path="/sites" component={ListingSites} />
      <Route path="/clients" component={ListingClients} />
      <Route path="/site/:id" component={Site} />
      <Route path="/client/:id" component={Client} />
    </div>
  </BrowserRouter>
);

export default Router;
