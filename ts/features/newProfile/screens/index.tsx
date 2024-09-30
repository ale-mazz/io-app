import React from "react";
import { IOScrollViewWithLargeHeader } from "../../../components/ui/IOScrollViewWithLargeHeader";
import I18n from "../../../i18n";

const NewProfileScreen = () => (
  <IOScrollViewWithLargeHeader
    title={{
      label: I18n.t("newProfile.data.title")
    }}
    description={I18n.t("newProfile.data.subtitle")}
    headerActionsProp={{ showHelp: true }}
  >
    {/* Content */}
  </IOScrollViewWithLargeHeader>
);

export default NewProfileScreen;
