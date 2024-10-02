import React from "react";
import { Alert } from "@pagopa/io-app-design-system";
import I18n from "../../../i18n";

type NewProfileErrorProps = {
  onPress: () => void;
};

const NewProfileError = ({ onPress }: NewProfileErrorProps) => (
  <Alert
    variant={"error"}
    action={I18n.t("global.buttons.retry")}
    onPress={() => onPress()}
    title={I18n.t("profile.errors.load")}
    content={I18n.t("global.actions.retry")}
  />
);

export default NewProfileError;
