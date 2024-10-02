import { StyleSheet, View } from "react-native";
import { Body, Pictogram, VSpacer } from "@pagopa/io-app-design-system";
import React from "react";
import { useIONavigation } from "../../../navigation/params/AppParamsList";
import I18n from "../../../i18n";
import { FooterActions } from "../../../components/ui/FooterActions";
import ROUTES from "../../../navigation/routes";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24
  }
});

const NewProfileDeleteSuccess = () => {
  const navigation = useIONavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Pictogram name={"success"} />
        <Body>{I18n.t("newProfile.deleteFlow.success")}</Body>
        <VSpacer size={12} />
      </View>
      <FooterActions
        actions={{
          type: "SingleButton",
          primary: {
            onPress: () =>
              navigation.navigate(ROUTES.MAIN, {
                screen: ROUTES.NEW_PROFILE
              }),
            label: I18n.t("global.buttons.ok")
          }
        }}
      />
    </View>
  );
};

export default NewProfileDeleteSuccess;
