import { ActionType, createAsyncAction } from "typesafe-actions";
import { CommonActions } from "@react-navigation/native";
import { NetworkError } from "../../../../utils/errors";
import NewProfile from "../../types";
import NavigationService from "../../../../navigation/NavigationService";
import ROUTES from "../../../../navigation/routes";

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

export const navigateToRemoveNewProfileSuccess = () =>
  NavigationService.dispatchNavigationAction(
    CommonActions.navigate(ROUTES.NEW_PROFILE_STACK_NAVIGATOR, {
      screen: ROUTES.NEW_PROFILE_DELETE_SUCCESS
    })
  );

export type NewProfileActions = ActionType<typeof newProfileActions>;
