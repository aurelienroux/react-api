import React from "react";
import ListingClients from "../components//Pages/ListingClients";
import { render } from "@testing-library/react";

it("renders component without crashing without crashing", () => {
  render(<ListingClients />);
});
