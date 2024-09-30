import React from "react";
import { createStore, PreloadedState } from "redux";
import NewProfileScreen from "../index";
import { appReducer } from "../../../../store/reducers";
import { applicationChangeState } from "../../../../store/actions/application";
import { GlobalState } from "../../../../store/reducers/types";
import { renderScreenWithNavigationStoreContext } from "../../../../utils/testWrapper";
import ROUTES from "../../../../navigation/routes";
import I18n from "../../../../i18n";

const mockNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      ...actualNav.useNavigation(),
      navigate: mockNavigate
    })
  };
});

describe("Test NewProfile screen", () => {
  jest.useFakeTimers();
  afterEach(jest.clearAllMocks);

  it("The screen should not be null", () => {
    const { component } = renderComponent();

    expect(component).not.toBeNull();
  });

  it("The screen should render H2 component with title and body component with subtitle", () => {
    const { component } = renderComponent();

    expect(
      component.queryAllByText(I18n.t("newProfile.data.title"))
    ).not.toBeNull();
    expect(
      component.queryByText(I18n.t("newProfile.data.subtitle"))
    ).not.toBeNull();
  });
});

const renderComponent = () => {
  const globalState = appReducer(
    undefined,
    applicationChangeState("active")
  ) as PreloadedState<GlobalState>;
  const store = createStore(appReducer, globalState);

  return {
    component: renderScreenWithNavigationStoreContext<GlobalState>(
      () => <NewProfileScreen />,
      ROUTES.NEW_PROFILE,
      {},
      store
    ),
    store
  };
};
