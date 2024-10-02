import React from "react";
import { render } from "@testing-library/react-native";
import NewProfileLoading from "../NewProfileLoading";

describe("NewProfileLoading Component", () => {
  it("renders correctly", () => {
    const { toJSON } = render(<NewProfileLoading />);
    expect(toJSON()).toMatchSnapshot();
  });
});
