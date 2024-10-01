import React, { useCallback, useEffect } from "react";
import {
  ContentWrapper,
  Divider,
  ListItemInfo,
  ListItemSwitch,
  VSpacer
} from "@pagopa/io-app-design-system";
import * as pot from "@pagopa/ts-commons/lib/pot";
import { IOScrollViewWithLargeHeader } from "../../../components/ui/IOScrollViewWithLargeHeader";
import I18n from "../../../i18n";
import NewProfile from "../types";
import NewProfileLoading from "../components/NewProfileLoading";
import NewProfileError from "../components/NewProfileError";
import { useIODispatch, useIOSelector } from "../../../store/hooks";
import { newProfileActions } from "../store/actions";
import { selectNewProfile } from "../store/selectors";
import {
  areUserDataBeingDeletedSelector,
  isUserDataProcessingDeleteLoadingSelector
} from "../../../store/reducers/userDataProcessing";
import { loadUserDataProcessing } from "../../../store/actions/userDataProcessing";
import { UserDataProcessingChoiceEnum } from "../../../../definitions/backend/UserDataProcessingChoice";

const NewProfileScreen = () => {
  const dispatch = useIODispatch();
  const newProfile = useIOSelector(selectNewProfile);
  const userDataProcessingLoading = useIOSelector(
    isUserDataProcessingDeleteLoadingSelector
  );
  const areUserDataBeingDeleted = useIOSelector(
    areUserDataBeingDeletedSelector
  );

  const loadProfile = useCallback(() => {
    dispatch(newProfileActions.request());
  }, [dispatch]);

  const checkUserDataProcessing = useCallback(() => {
    dispatch(
      loadUserDataProcessing.request(UserDataProcessingChoiceEnum.DELETE)
    );
  }, [dispatch]);

  useEffect(() => {
    loadProfile();
    checkUserDataProcessing();
  }, [checkUserDataProcessing, loadProfile]);

  const NewProfileContent = ({ value }: { value: NewProfile }) => (
    <>
      {value.name && (
        <>
          <ListItemInfo
            label={I18n.t("profile.data.list.nameSurname")}
            value={value.name}
            testID="name"
            icon={"profile"}
          />
          <Divider />
        </>
      )}
      {value.fiscalCode && (
        <>
          <ListItemInfo
            label={I18n.t("profile.data.list.fiscalCode")}
            testID="fiscal-code"
            value={value.fiscalCode}
            icon={"creditCard"}
          />
          <Divider />
        </>
      )}
      {value.email && (
        <ListItemInfo
          label={I18n.t("profile.data.list.email")}
          value={value.email}
          testID="email"
          icon={"email"}
        />
      )}
    </>
  );

  const NewProfileContentMapped = useCallback(
    () =>
      pot.fold(
        newProfile,
        () => <NewProfileLoading />,
        () => <NewProfileLoading />,
        () => <NewProfileLoading />,
        () => <NewProfileError onPress={loadProfile} />,
        value => <NewProfileContent value={value} />,
        () => <NewProfileLoading />,
        () => <NewProfileLoading />,
        () => <NewProfileError onPress={loadProfile} />
      ),
    [loadProfile, newProfile]
  );

  return (
    <IOScrollViewWithLargeHeader
      title={{
        label: I18n.t("newProfile.data.title")
      }}
      description={I18n.t("newProfile.data.subtitle")}
      headerActionsProp={{ showHelp: true }}
    >
      <ContentWrapper>
        <NewProfileContentMapped />
        <VSpacer size={48} />

        <ListItemSwitch
          label={I18n.t("newProfile.deleteFlow.deleteStatus")}
          isLoading={userDataProcessingLoading}
          value={areUserDataBeingDeleted}
        />
      </ContentWrapper>
    </IOScrollViewWithLargeHeader>
  );
};
export default NewProfileScreen;
