import { SagaIterator } from "redux-saga";
import { call, put, take, takeLatest } from "typed-redux-saga/macro";
import { ActionType, isActionOf } from "typesafe-actions";
import * as E from "fp-ts/Either";
import { readableReport } from "@pagopa/ts-commons/lib/reporters";
import { BackendClient } from "../../../api/backend";
import {
  navigateToRemoveNewProfileSuccess,
  newProfileActions
} from "../store/actions";
import { getNetworkError } from "../../../utils/errors";
import { upsertUserDataProcessing } from "../../../store/actions/userDataProcessing";

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
      switch (response.right.status) {
        case 200:
          // if the response is right and the status is 200, we update the state with the response value
          yield* put(
            newProfileActions.success({
              name: response.right.value.name,
              fiscalCode: response.right.value.fiscal_code,
              email: response.right.value.email || "Email not found"
            })
          );
          break;
        case 401:
          // if the response is right and the status is 401, we return early
          break;
        default:
          // if the response is right and the status is not 200 or 401, we throw an error
          throw new Error(`Unexpected status code: ${response.right.status}`);
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

// watch for action of removing account
function* handleRemoveNewProfile() {
  // wait for response (success/failure)
  const upsertUserDataProcessingResponse = yield* take<
    ActionType<
      | typeof upsertUserDataProcessing.success
      | typeof upsertUserDataProcessing.failure
    >
  >([upsertUserDataProcessing.success, upsertUserDataProcessing.failure]);

  // if success go to remove account success screen
  if (
    isActionOf(
      upsertUserDataProcessing.success,
      upsertUserDataProcessingResponse
    )
  ) {
    yield* call(navigateToRemoveNewProfileSuccess);
  }
}

/**
 * Watches the profile data request
 * @param getProfile the function to call the backend
 * @returns the saga iterator
 * Note: we are using takeLatest to handle only the latest request and ignore the previous ones
 */
export function* watchNewProfileSaga(
  getProfile: ReturnType<typeof BackendClient>["getProfile"]
): SagaIterator {
  // watch for the profile data request
  yield* takeLatest(
    newProfileActions.request,
    handleNewProfileData,
    getProfile
  );
  // watch for the remove profile/account request
  yield* takeLatest(upsertUserDataProcessing.request, handleRemoveNewProfile);
}
