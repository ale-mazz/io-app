import { ActionType, createAsyncAction } from "typesafe-actions";
import { NetworkError } from "../../../../utils/errors";
import ProfileAlessandro from "../../types";

export const profileAlessandroActions = createAsyncAction(
  "PROFILE_DATA_ALESSANDRO_REQUEST",
  "PROFILE_DATA_ALESSANDRO_SUCCESS",
  "PROFILE_DATA_ALESSANDRO_FAILURE"
)<void, ProfileAlessandro, NetworkError>();

export type ProfileAlessandroActions = ActionType<
  typeof profileAlessandroActions
>;
