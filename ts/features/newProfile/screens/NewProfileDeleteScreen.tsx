import React from "react";
import { StyleSheet, View } from "react-native";
import { Body, ContentWrapper, IOStyles } from "@pagopa/io-app-design-system";
import I18n from "../../../i18n";
import { InfoBox } from "../../../components/box/InfoBox";
import { IOScrollViewWithLargeHeader } from "../../../components/ui/IOScrollViewWithLargeHeader";
import { FooterActions } from "../../../components/ui/FooterActions";
import { useIONavigation } from "../../../navigation/params/AppParamsList";
import ROUTES from "../../../navigation/routes";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1
  }
});

const NewProfileDeleteScreen = () => {
  const navigation = useIONavigation();

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
              <Body>{I18n.t("newProfile.deleteFlow.description")}</Body>
            </InfoBox>
          </ContentWrapper>
        </View>
      </IOScrollViewWithLargeHeader>
      <FooterActions
        fixed={false}
        actions={{
          type: "TwoButtons",
          primary: {
            label: I18n.t("global.buttons.confirm"),
            onPress: () =>
              navigation.navigate(ROUTES.NEW_PROFILE_STACK_NAVIGATOR, {
                screen: ROUTES.NEW_PROFILE_DELETE_CONFIRMATION
              })
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

export default NewProfileDeleteScreen;
