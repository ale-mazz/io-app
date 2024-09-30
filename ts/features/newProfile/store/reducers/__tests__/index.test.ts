import { createStore } from "redux";
import * as pot from "@pagopa/ts-commons/lib/pot";
import { applicationChangeState } from "../../../../../store/actions/application";
import { appReducer } from "../../../../../store/reducers";
import { getTimeoutError } from "../../../../../utils/errors";
import { newProfileActions } from "../../actions";
import { newProfileUserMock } from "../../../types/__mocks__/NewProfileUser.mock";

const genericError = getTimeoutError();

describe("newProfile reducer", () => {
  it("It should start with an empty initial state (pot.none)", () => {
    const globalState = appReducer(undefined, applicationChangeState("active"));
    expect(globalState.newProfile).toStrictEqual(pot.none);
  });

  it("It should handle the request action resulting in a loading state (pot.noneLoading)", () => {
    const globalState = appReducer(undefined, applicationChangeState("active"));
    const store = createStore(appReducer, globalState as any);
    store.dispatch(newProfileActions.request());
    expect(store.getState().newProfile).toStrictEqual(pot.noneLoading);
  });

  it("It should handle the success action obtaining the correct data (some(newProfileUserMock))", () => {
    const globalState = appReducer(undefined, applicationChangeState("active"));
    const store = createStore(appReducer, globalState as any);
    store.dispatch(newProfileActions.success(newProfileUserMock));
    expect(store.getState().newProfile).toStrictEqual(
      pot.some(newProfileUserMock)
    );
  });

  it("It should handle the failure action resulting in an error state (pot.noneError)", () => {
    const globalState = appReducer(undefined, applicationChangeState("active"));
    const store = createStore(appReducer, globalState as any);
    store.dispatch(newProfileActions.failure(genericError));
    expect(store.getState().newProfile).toStrictEqual(
      pot.noneError(genericError)
    );
  });
});
