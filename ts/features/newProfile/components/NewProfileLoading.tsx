import { LoadingSpinner } from "@pagopa/io-app-design-system";
import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 16
  }
});

export const NewProfileLoading = () => (
  <View style={styles.container}>
    <LoadingSpinner size={24} />
  </View>
);

export default NewProfileLoading;
