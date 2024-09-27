import { createSelector } from "reselect";
import * as pot from "@pagopa/ts-commons/lib/pot";
import { GlobalState } from "../../../../store/reducers/types";

export const selectProfileAlessandro = (state: GlobalState) =>
  state.profileAlessandro;

export const selectProfileEmail = createSelector(
  (state: GlobalState) => state.profileAlessandro,
  profileAlessandro =>
    pot.getOrElse(
      pot.map(profileAlessandro, p => p.email),
      undefined
    )
);

export const selectProfileName = createSelector(
  (state: GlobalState) => state.profileAlessandro,
  profileAlessandro =>
    pot.getOrElse(
      pot.map(profileAlessandro, p => p.name),
      undefined
    )
);

export const selectProfileFiscalCode = createSelector(
  (state: GlobalState) => state.profileAlessandro,
  profileAlessandro =>
    pot.getOrElse(
      pot.map(profileAlessandro, p => p.fiscalCode),
      undefined
    )
);
