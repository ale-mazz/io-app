import { ActionType, createAsyncAction } from "typesafe-actions";
import { NetworkError } from "../../../../utils/errors";
import NewProfile from "../../types";

/**
 * Actions for the new profile feature
 * request: request to the backend
 * success: response from the backend
 * failure: error from the backend
 */
export const newProfileActions = createAsyncAction(
  "NEW_PROFILE_DATA_REQUEST",
  "NEW_PROFILE_DATA_SUCCESS",
  "NEW_PROFILE_DATA_FAILURE"
)<void, NewProfile, NetworkError>();

export type NewProfileActions = ActionType<typeof newProfileActions>;
