import React from "react";
import { create } from "react-test-renderer";
import ListingSites from "../components//Pages/ListingSites";

test("Matches the snapshot", () => {
  const listingSites = create(<ListingSites />);
  expect(listingSites.toJSON()).toMatchSnapshot();
});
