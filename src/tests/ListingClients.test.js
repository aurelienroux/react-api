import React from "react";
import { create } from "react-test-renderer";
import ListingClients from "../components//Pages/ListingClients";

test("Matches the snapshot", () => {
  const listingClients = create(<ListingClients />);
  expect(listingClients.toJSON()).toMatchSnapshot();
});
