import { LoadingSpinner } from "@pagopa/io-app-design-system";
import { View } from "react-native";
import React from "react";

export const ProfileAlessandroLoading = () => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <LoadingSpinner size={24} />
  </View>
);

export default ProfileAlessandroLoading;
