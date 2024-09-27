import * as React from "react";
import { Alert } from "@pagopa/io-app-design-system";
import I18n from "../../../i18n";

type ProfileAlessandroErrorProps = {
  onPress: () => void;
};

export const ProfileAlessandroError = ({
  onPress
}: ProfileAlessandroErrorProps) => (
  <Alert
    variant={"error"}
    action={I18n.t("global.buttons.retry")}
    onPress={() => onPress()}
    title={I18n.t("profile.errors.load")}
    content={I18n.t("global.actions.retry")}
  />
);
