import React from "react";
import { Alert } from "@pagopa/io-app-design-system";
import I18n from "../../../i18n";

type NewProfileErrorProps = {
  title?: string;
  content?: string;
  onPress?: () => void;
};

const NewProfileError = ({ onPress, title, content }: NewProfileErrorProps) => (
  <Alert
    variant={"error"}
    action={I18n.t("global.buttons.retry")}
    onPress={() => onPress && onPress()}
    title={title ?? I18n.t("profile.errors.load")}
    content={content ?? I18n.t("global.actions.retry")}
  />
);

export default NewProfileError;
