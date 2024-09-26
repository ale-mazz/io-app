import React from "react";
import { View } from "react-native";
import { WithTestID } from "@pagopa/io-app-design-system/src/utils/types";
import {
  Icon,
  IOIcons
} from "@pagopa/io-app-design-system/src/components/icons";
import { Body, Divider, Label, useIOTheme } from "@pagopa/io-app-design-system";
import { IOListItemVisualParams } from "@pagopa/io-app-design-system/src/core";

export type ProfileAlessandroListItemProps = WithTestID<{
  label: string;
  value: string | React.ReactNode;
  // Accessibility
  accessibilityLabel?: string;
}> & {
  icon?: IOIcons;
};

const ProfileAlessandroListItem = ({
  label,
  value,
  icon,
  accessibilityLabel,
  testID
}: ProfileAlessandroListItemProps) => {
  const theme = useIOTheme();
  return (
    <>
      <View
        testID={testID}
        accessibilityLabel={accessibilityLabel}
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: IOListItemVisualParams.paddingVertical
        }}
      >
        {icon && (
          <View style={{ marginRight: IOListItemVisualParams.iconMargin }}>
            <Icon
              name={icon}
              color="blueIO-400"
              size={IOListItemVisualParams.iconSize}
            />
          </View>
        )}
        <View>
          <Label>{label}</Label>
          <Body color={theme["textBody-tertiary"]}>{value}</Body>
        </View>
        <Divider />
      </View>
      <Divider />
    </>
  );
};

export default ProfileAlessandroListItem;
