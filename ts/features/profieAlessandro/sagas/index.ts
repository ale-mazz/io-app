import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "typed-redux-saga/macro";
import { ActionType } from "typesafe-actions";
import * as E from "fp-ts/Either";
import { readableReport } from "@pagopa/ts-commons/lib/reporters";
import { BackendClient } from "../../../api/backend";
import { profileAlessandroActions } from "../store/actions";
import { getNetworkError } from "../../../utils/errors";

/**
 * Handles the profile data request
 * @param getProfile the function to call the backend
 * @param action the action to handle (profileAlessandroData.request)
 */
export function* handleProfileAlessandroData(
  getProfile: ReturnType<typeof BackendClient>["getProfile"],
  action: ActionType<typeof profileAlessandroActions.request>
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
          profileAlessandroActions.success({
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
    yield* put(profileAlessandroActions.failure(getNetworkError(e)));
  }
}
export function* watchProfileAlessandroSaga(
  getProfileAlessandro: ReturnType<typeof BackendClient>["getProfile"]
): SagaIterator {
  yield* takeLatest(
    profileAlessandroActions.request,
    handleProfileAlessandroData,
    getProfileAlessandro
  );
}
