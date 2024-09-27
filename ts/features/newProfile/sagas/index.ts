import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "typed-redux-saga/macro";
import { ActionType } from "typesafe-actions";
import * as E from "fp-ts/Either";
import { readableReport } from "@pagopa/ts-commons/lib/reporters";
import { BackendClient } from "../../../api/backend";
import { newProfileActions } from "../store/actions";
import { getNetworkError } from "../../../utils/errors";

/**
 * Handles the profile data request
 * @param getProfile the function to call the backend
 * @param action the action to handle (profileAlessandroData.request)
 */
export function* handleNewProfileData(
  getProfile: ReturnType<typeof BackendClient>["getProfile"],
  action: ActionType<typeof newProfileActions.request>
) {
  try {
    // call the backend to get the profile data
    const response = yield* call(getProfile, action);
    if (E.isRight(response)) {
      // if the response is 401, the user is not logged in and we don't need to do anything
      if (response.right.status === 401) {
        return;
      }
      // if the response is 200, we can update the state with the new data
      if (response.right.status === 200) {
        yield* put(
          newProfileActions.success({
            name: response.right.value.name,
            fiscalCode: response.right.value.fiscal_code,
            email: response.right.value.email || "Email not found"
          })
        );
      }
    } else {
      // if the response is not right, we throw an error with the readable report
      throw new Error(readableReport(response.left));
    }
  } catch (e) {
    // if an error occurs, we update the state with the error
    yield* put(newProfileActions.failure(getNetworkError(e)));
  }
}

/**
 * Watches the profile data request
 * @param getProfileAlessandro the function to call the backend
 * @returns the saga iterator
 * Note: we are using takeLatest to handle only the latest request and ignore the previous ones
 */
export function* watchNewProfileSaga(
  getProfileAlessandro: ReturnType<typeof BackendClient>["getProfile"]
): SagaIterator {
  yield* takeLatest(
    newProfileActions.request,
    handleNewProfileData,
    getProfileAlessandro
  );
}
