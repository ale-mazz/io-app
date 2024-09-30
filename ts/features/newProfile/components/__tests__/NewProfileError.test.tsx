import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import NewProfileError from "../NewProfileError";
import I18n from "../../../../i18n";

describe("NewProfileError Component", () => {
  it("matches the snapshot", () => {
    const onPressMock = jest.fn();
    const tree = render(<NewProfileError onPress={onPressMock} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<NewProfileError onPress={onPressMock} />);

    // Check if the title and content texts are rendered
    expect(getByText(I18n.t("profile.errors.load"))).toBeTruthy();
    expect(getByText(I18n.t("global.buttons.retry"))).toBeTruthy();

    // Check if the action button is rendered
    expect(getByText(I18n.t("global.actions.retry"))).toBeTruthy();
  });

  it("calls onPress when the action button is pressed", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<NewProfileError onPress={onPressMock} />);

    // Simulate a press on the action button
    fireEvent.press(getByText(I18n.t("global.actions.retry")));

    // Verify that onPress was called
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
