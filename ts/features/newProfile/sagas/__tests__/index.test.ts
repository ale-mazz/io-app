import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import * as E from "fp-ts/Either";
import { throwError } from "redux-saga-test-plan/providers";
import { getNetworkError } from "../../../../utils/errors";
import { handleNewProfileData, watchNewProfileSaga } from "../index";
import { newProfileActions } from "../../store/actions";
import {
  newProfileUserMock,
  sagaPayloadMock
} from "../../types/__mocks__/NewProfileUser.mock";

const genericError = new Error("genericError");
const mockGetProfile = jest.fn();

describe("newProfile saga", () => {
  it("It should dispatch success action when response is Right with status 200", () => {
    const mockResponse = E.right({
      status: 200,
      value: sagaPayloadMock
    });

    return expectSaga(
      handleNewProfileData,
      mockGetProfile,
      newProfileActions.request()
    )
      .provide([[matchers.call.fn(mockGetProfile), mockResponse]])
      .put(newProfileActions.success(newProfileUserMock))
      .run();
  });

  it("It should return early when response is Right with status 401", () => {
    const mockResponse = E.right({
      status: 401
    });

    return expectSaga(
      handleNewProfileData,
      mockGetProfile,
      newProfileActions.request()
    )
      .provide([[matchers.call.fn(mockGetProfile), mockResponse]])
      .run()
      .then(result => {
        expect(result.effects.put).toBeUndefined();
      });
  });

  it("It should dispatch failure action when response is Left (error)", () =>
    expectSaga(
      handleNewProfileData,
      mockGetProfile,
      newProfileActions.request()
    )
      .provide([[matchers.call.fn(mockGetProfile), throwError(genericError)]])
      .put(newProfileActions.failure(getNetworkError(genericError)))
      .run());

  it("It should dispatch failure action when an exception is thrown", () => {
    const mockException = new Error("Exception occurred");
    return expectSaga(
      handleNewProfileData,
      mockGetProfile,
      newProfileActions.request()
    )
      .provide({
        call(effect, next) {
          if (effect.fn === mockGetProfile) {
            throw mockException;
          }
          return next();
        }
      })
      .put(newProfileActions.failure(getNetworkError(mockException)))
      .run();
  });
});

describe("watchNewProfileSaga saga", () => {
  it("It should handle newProfileActions.request action and invoke handleNewProfileData", () => {
    const mockResponse = E.right({
      status: 200,
      value: sagaPayloadMock
    });

    return expectSaga(watchNewProfileSaga, mockGetProfile)
      .provide([[matchers.call.fn(mockGetProfile), mockResponse]])
      .dispatch(newProfileActions.request())
      .put(newProfileActions.success(newProfileUserMock))
      .run();
  });
});
