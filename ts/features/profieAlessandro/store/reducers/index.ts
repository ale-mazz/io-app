import * as pot from "@pagopa/ts-commons/lib/pot";
import { getType } from "typesafe-actions";
import { NetworkError } from "../../../../utils/errors";
import { Action } from "../../../../store/actions/types";
import ProfileAlessandro from "../../types";
import { profileAlessandroActions } from "../actions";

export type ProfileAlessandroState = pot.Pot<ProfileAlessandro, NetworkError>;

export const initialState: ProfileAlessandroState = pot.none;

const profileAlessandroReducer = (
  state: ProfileAlessandroState = initialState,
  action: Action
): ProfileAlessandroState => {
  switch (action.type) {
    case getType(profileAlessandroActions.request):
      return pot.toLoading(state);
    case getType(profileAlessandroActions.success):
      return pot.some(action.payload);
    case getType(profileAlessandroActions.failure):
      return pot.toError(state, action.payload);
    default:
      return state;
  }
};

export default profileAlessandroReducer;
