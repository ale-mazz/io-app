import { EmailInsertScreenNavigationParams } from "../../screens/profile/EmailInsertScreen";
import { SendEmailValidationScreenProp } from "../../screens/profile/EmailValidationSendEmailScreen";
import ROUTES from "../routes";

export type ProfileParamsList = {
  [ROUTES.PROFILE_PRIVACY_MAIN]: undefined;
  [ROUTES.PROFILE_PRIVACY]: undefined;
  [ROUTES.PROFILE_PRIVACY_SHARE_DATA]: undefined;
  [ROUTES.PROFILE_PREFERENCES_HOME]: undefined;
  [ROUTES.PROFILE_DATA]: undefined;
  [ROUTES.PROFILE_SECURITY]: undefined;
  [ROUTES.PROFILE_PREFERENCES_SERVICES]: undefined;
  [ROUTES.PROFILE_PREFERENCES_EMAIL_FORWARDING]: undefined;
  [ROUTES.PROFILE_PREFERENCES_CALENDAR]: undefined;
  [ROUTES.PROFILE_PREFERENCES_LANGUAGE]: undefined;
  [ROUTES.PROFILE_ABOUT_APP]: undefined;
  [ROUTES.PROFILE_LOGOUT]: undefined;
  [ROUTES.PROFILE_FISCAL_CODE]: undefined;
  [ROUTES.INSERT_EMAIL_SCREEN]: EmailInsertScreenNavigationParams;
  [ROUTES.EMAIL_VERIFICATION_SCREEN]: SendEmailValidationScreenProp;
  [ROUTES.PIN_SCREEN]: undefined;
  [ROUTES.PROFILE_DOWNLOAD_DATA]: undefined;
  [ROUTES.MARKDOWN_PLAYGROUND]: undefined;
  [ROUTES.DESIGN_SYSTEM]: undefined;
  [ROUTES.LOLLIPOP_PLAYGROUND]: undefined;
  [ROUTES.PROFILE_REMOVE_ACCOUNT_INFO]: undefined;
  [ROUTES.PROFILE_REMOVE_ACCOUNT_DETAILS]: undefined;
  [ROUTES.PROFILE_REMOVE_ACCOUNT_SUCCESS]: undefined;
  [ROUTES.CGN_LANDING_PLAYGROUND]: undefined;
  [ROUTES.TRIALS_SYSTEM_PLAYGROUND]: undefined;
  [ROUTES.PROFILE_PREFERENCES_NOTIFICATIONS]: undefined;
  [ROUTES.IDPAY_ONBOARDING_PLAYGROUND]: undefined;
  [ROUTES.IDPAY_CODE_PLAYGROUND]: undefined;
  [ROUTES.IO_MARKDOWN_PLAYGROUND]: undefined;
  [ROUTES.SETTINGS_MAIN]: undefined;
  // Profilo Alessandro
  [ROUTES.PROFILE_DATA_ALESSANDRO]: undefined;
};
