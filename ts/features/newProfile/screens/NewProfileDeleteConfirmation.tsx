import { StyleSheet, View } from "react-native";
import {
  Body,
  ContentWrapper,
  Divider,
  IOStyles,
  ListItemInfo,
  VSpacer
} from "@pagopa/io-app-design-system";
import React, { useCallback, useEffect } from "react";
import * as pot from "@pagopa/ts-commons/lib/pot";
import { useIONavigation } from "../../../navigation/params/AppParamsList";
import { useIODispatch, useIOSelector } from "../../../store/hooks";
import { selectNewProfile } from "../store/selectors";
import { userDataProcessingSelector } from "../../../store/reducers/userDataProcessing";
import { IOScrollViewWithLargeHeader } from "../../../components/ui/IOScrollViewWithLargeHeader";
import I18n from "../../../i18n";
import { InfoBox } from "../../../components/box/InfoBox";
import { FooterActions } from "../../../components/ui/FooterActions";
import NewProfile from "../types";
import NewProfileLoading from "../components/NewProfileLoading";
import NewProfileError from "../components/NewProfileError";
import { newProfileActions } from "../store/actions";
import { UserDataProcessingChoiceEnum } from "../../../../definitions/backend/UserDataProcessingChoice";
import { upsertUserDataProcessing } from "../../../store/actions/userDataProcessing";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1
  }
});

const NewProfileDeleteConfirmation = () => {
  const navigation = useIONavigation();
  const newProfile = useIOSelector(selectNewProfile);
  const dispatch = useIODispatch();
  const userDataProcessing = useIOSelector(userDataProcessingSelector);

  const loadProfile = useCallback(() => {
    dispatch(newProfileActions.request());
  }, [dispatch]);

  const deleteProfile = useCallback(() => {
    dispatch(
      upsertUserDataProcessing.request(UserDataProcessingChoiceEnum.DELETE)
    );
  }, [dispatch]);

  useEffect(() => {
    loadProfile();
  }, [loadProfile]);

  const renderUpsertError = useCallback(() => {
    if (pot.isError(userDataProcessing.DELETE)) {
      return (
        <NewProfileError
          title={I18n.t("newProfile.deleteFlow.error")}
          content={I18n.t("newProfile.deleteFlow.retry")}
          onPress={deleteProfile}
        />
      );
    }
    return null;
  }, [deleteProfile, userDataProcessing.DELETE]);

  const Data = ({ value }: { value: NewProfile }) => (
    <>
      {value.name && (
        <>
          <ListItemInfo
            label={I18n.t("profile.data.list.nameSurname")}
            value={value.name}
            testID="name"
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
          />
          <Divider />
        </>
      )}
      {value.email && (
        <ListItemInfo
          label={I18n.t("profile.data.list.email")}
          value={value.email}
          testID="email"
        />
      )}
    </>
  );

  const DataMapped = useCallback(
    () =>
      pot.fold(
        newProfile,
        () => <NewProfileLoading />,
        () => <NewProfileLoading />,
        () => <NewProfileLoading />,
        () => <NewProfileError onPress={loadProfile} />,
        value => <Data value={value} />,
        () => <NewProfileLoading />,
        () => <NewProfileLoading />,
        () => <NewProfileError onPress={loadProfile} />
      ),
    [loadProfile, newProfile]
  );

  return (
    <View style={styles.container}>
      <IOScrollViewWithLargeHeader
        title={{
          label: I18n.t("newProfile.deleteFlow.title")
        }}
        description={I18n.t("newProfile.deleteFlow.subtitle")}
        headerActionsProp={{ showHelp: true }}
      >
        <View style={IOStyles.flex}>
          <ContentWrapper>
            <InfoBox iconName="warningFilled" alignedCentral>
              <Body>{I18n.t("newProfile.deleteFlow.reviewData")}</Body>
            </InfoBox>
            <VSpacer size={12} />
            <DataMapped />
            <VSpacer size={12} />
            {renderUpsertError()}
          </ContentWrapper>
        </View>
      </IOScrollViewWithLargeHeader>
      <FooterActions
        fixed={false}
        actions={{
          type: "TwoButtons",
          primary: {
            label: I18n.t("global.buttons.confirm"),
            loading: pot.isLoading(userDataProcessing.DELETE),
            onPress: () => deleteProfile()
          },
          secondary: {
            label: I18n.t("global.buttons.cancel"),
            onPress: () => navigation.goBack()
          }
        }}
      />
    </View>
  );
};

export default NewProfileDeleteConfirmation;
