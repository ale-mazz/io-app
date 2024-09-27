import React, { useCallback, useEffect } from "react";
import { ContentWrapper } from "@pagopa/io-app-design-system";
import * as pot from "@pagopa/ts-commons/lib/pot";
import { IOScrollViewWithLargeHeader } from "../../../components/ui/IOScrollViewWithLargeHeader";
import I18n from "../../../i18n";
import ProfileAlessandroListItem from "../components/ProfileAlessandroListItem";
import { useIODispatch, useIOSelector } from "../../../store/hooks";
import { selectProfileAlessandro } from "../store/selectors";
import { profileAlessandroActions } from "../store/actions";
import ProfileAlessandroLoading from "../components/ProfileAlessandroLoading";
import { ProfileAlessandroError } from "../components/ProfileAlessandroError";
import ProfileAlessandro from "../types";

const ProfileDataScreenAlessandro = () => {
  const dispatch = useIODispatch();
  const profileAlessandro = useIOSelector(selectProfileAlessandro);

  const loadAlessandroProfile = useCallback(() => {
    dispatch(profileAlessandroActions.request());
  }, [dispatch]);

  useEffect(() => {
    loadAlessandroProfile();
  }, [loadAlessandroProfile]);

  const ProfileAlessandroContent = ({
    value
  }: {
    value: ProfileAlessandro;
  }) => (
    <>
      <ProfileAlessandroListItem
        label={I18n.t("profile.data.list.nameSurname")}
        value={value.name}
        icon={"profile"}
        testID="name-surname"
      />
      <ProfileAlessandroListItem
        label={I18n.t("profile.data.list.fiscalCode")}
        value={value.fiscalCode}
        icon={"fiscalCodeIndividual"}
        testID="fiscal-code"
      />
      <ProfileAlessandroListItem
        label={I18n.t("profile.data.list.email")}
        value={value.email}
        icon={"email"}
        testID="email"
      />
    </>
  );

  /**
     This is a fold function that returns a different component based on the state of the pot
     p: Pot<ProfileAlessandro, TimeoutError | GenericError>,
     foldNone: () => Element
     foldNoneLoading: () => Element
     foldNoneUpdating: (newValue: ProfileAlessandro) => Element
     foldNoneError: (error: (TimeoutError | GenericError)) => Element
     foldSome: (value: ProfileAlessandro) => Element
     foldSomeLoading: (value: ProfileAlessandro) => Element
     foldSomeUpdating: (value: ProfileAlessandro, newValue: ProfileAlessandro) => Element
     foldSomeError: (value: ProfileAlessandro, error: (TimeoutError | GenericError)) => Element)
  */
  const ProfileContentMapped = useCallback(
    () =>
      pot.fold(
        profileAlessandro,
        () => <ProfileAlessandroLoading />,
        () => <ProfileAlessandroLoading />,
        () => <ProfileAlessandroLoading />,
        () => <ProfileAlessandroError onPress={loadAlessandroProfile} />,
        value => <ProfileAlessandroContent value={value} />,
        () => <ProfileAlessandroLoading />,
        () => <ProfileAlessandroLoading />,
        () => <ProfileAlessandroError onPress={loadAlessandroProfile} />
      ),
    [loadAlessandroProfile, profileAlessandro]
  );

  return (
    <IOScrollViewWithLargeHeader
      title={{
        label: I18n.t("profile.dataAlessandro.title")
      }}
      description={I18n.t("profile.dataAlessandro.subtitle")}
      headerActionsProp={{ showHelp: true }}
    >
      <ContentWrapper>
        <ProfileContentMapped />
      </ContentWrapper>
    </IOScrollViewWithLargeHeader>
  );
};

export default ProfileDataScreenAlessandro;
