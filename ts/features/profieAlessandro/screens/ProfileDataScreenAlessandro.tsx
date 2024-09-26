import React, { useEffect, useMemo } from "react";
import { ContentWrapper } from "@pagopa/io-app-design-system";
import { IOScrollViewWithLargeHeader } from "../../../components/ui/IOScrollViewWithLargeHeader";
import I18n from "../../../i18n";
import ProfileAlessandroListItem from "../components/ProfileAlessandroListItem";
import { useIODispatch, useIOSelector } from "../../../store/hooks";
import {
  selectProfileEmail,
  selectProfileFiscalCode,
  selectProfileLoading,
  selectProfileName
} from "../store/selectors";
import { profileAlessandroActions } from "../store/actions";
import ProfileAlessandroLoading from "../components/ProfileAlessandroLoading";

const ProfileDataScreenAlessandro = () => {
  const dispatch = useIODispatch();
  const name = useIOSelector(selectProfileName);
  const email = useIOSelector(selectProfileEmail);
  const fiscalCode = useIOSelector(selectProfileFiscalCode);
  const isLoading = useIOSelector(selectProfileLoading);

  useEffect(() => {
    dispatch(profileAlessandroActions.request());
  }, [dispatch]);

  const content = useMemo(
    () => (
      <>
        <ProfileAlessandroListItem
          label={I18n.t("profile.data.list.nameSurname")}
          value={name}
          icon={"profile"}
          testID="name-surname"
        />
        <ProfileAlessandroListItem
          label={I18n.t("profile.data.list.fiscalCode")}
          value={fiscalCode}
          icon={"fiscalCodeIndividual"}
          testID="fiscal-code"
        />
        <ProfileAlessandroListItem
          label={I18n.t("profile.data.list.email")}
          value={email}
          icon={"email"}
          testID="email"
        />
      </>
    ),
    [email, fiscalCode, name]
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
        {isLoading ? <ProfileAlessandroLoading /> : content}
      </ContentWrapper>
    </IOScrollViewWithLargeHeader>
  );
};

export default ProfileDataScreenAlessandro;
