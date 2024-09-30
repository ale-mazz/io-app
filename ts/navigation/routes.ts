const ROUTES = {
  // Ingress
  INGRESS: "INGRESS",

  // UNSUPPORTED_DEVICE
  UNSUPPORTED_DEVICE: "UNSUPPORTED_DEVICE",

  // Authentication
  AUTHENTICATION: "AUTHENTICATION",
  AUTHENTICATION_LANDING: "AUTHENTICATION_LANDING",
  AUTHENTICATION_ROOTED_DEVICE: "AUTHENTICATION_ROOTED_DEVICE",
  AUTHENTICATION_OPT_IN: "AUTHENTICATION_OPT_IN",
  AUTHENTICATION_IDP_SELECTION: "AUTHENTICATION_IDP_SELECTION",
  AUTHENTICATION_IDP_LOGIN: "AUTHENTICATION_IDP_LOGIN",
  AUTHENTICATION_AUTH_SESSION: "AUTHENTICATION_AUTH_SESSION",
  AUTHENTICATION_IDP_TEST: "AUTHENTICATION_IDP_TEST",
  CIE_NOT_SUPPORTED: "CIE_NOT_SUPPORTED",
  CIE_ACTIVATE_NFC_SCREEN: "CIE_ACTIVATE_NFC_SCREEN",
  AUTH_ERROR_SCREEN: "AUTH_ERROR_SCREEN",
  UNLOCK_ACCESS_SCREEN: "UNLOCK_ACCESS_SCREEN",
  MARKDOWN: "MARKDOWN",
  AUTHENTICATION_CIE_ID_WIZARD: "AUTHENTICATION_CIE_ID_WIZARD",
  AUTHENTICATION_CIE_PIN_WIZARD: "AUTHENTICATION_CIE_PIN_WIZARD",
  AUTHENTICATION_SPID_WIZARD: "AUTHENTICATION_SPID_WIZARD",
  AUTHENTICATION_ID_ACTIVATION_WIZARD: "AUTHENTICATION_ID_ACTIVATION_WIZARD",

  // CIE
  CIE_EXPIRED_SCREEN: "CIE_EXPIRED_SCREEN",
  CIE_PIN_SCREEN: "CIE_PIN_SCREEN",
  CIE_LOGIN_CONFIG_SCREEN: "CIE_LOGIN_CONFIG_SCREEN",
  CIE_AUTHORIZE_USAGE_SCREEN: "CIE_AUTHORIZE_USAGE_SCREEN",
  CIE_CARD_READER_SCREEN: "CIE_CARD_READER_SCREEN",
  CIE_CONSENT_DATA_USAGE: "CIE_CONSENT_DATA_USAGE",
  CIE_WRONG_PIN_SCREEN: "CIE_WRONG_PIN_SCREEN",
  CIE_UNEXPECTED_ERROR: "CIE_UNEXPECTED_ERROR",
  CIE_EXTENDED_APDU_NOT_SUPPORTED_SCREEN:
    "CIE_EXTENDED_APDU_NOT_SUPPORTED_SCREEN",
  CIE_WRONG_CARD_SCREEN: "CIE_WRONG_CARD_SCREEN",

  // Mail verification
  CHECK_EMAIL: "CHECK_EMAIL",
  CHECK_EMAIL_NOT_VERIFIED: "CHECK_EMAIL_NOT_VERIFIED",
  CHECK_EMAIL_ALREADY_TAKEN: "CHECK_EMAIL_ALREADY_TAKEN",

  // Onboarding
  ONBOARDING: "ONBOARDING",
  ONBOARDING_TOS: "ONBOARDING_TOS",
  ONBOARDING_SHARE_DATA: "ONBOARDING_SHARE_DATA",
  ONBOARDING_SERVICES_PREFERENCE: "ONBOARDING_SERVICES_PREFERENCE",
  ONBOARDING_SERVICES_PREFERENCE_COMPLETE:
    "ONBOARDING_SERVICES_PREFERENCE_COMPLETE",
  ONBOARDING_PIN: "ONBOARDING_PIN",
  ONBOARDING_MISSING_DEVICE_PIN: "ONBOARDING_MISSING_DEVICE_PIN",
  ONBOARDING_MISSING_DEVICE_BIOMETRIC: "ONBOARDING_MISSING_DEVICE_BIOMETRIC",
  ONBOARDING_FINGERPRINT: "ONBOARDING_FINGERPRINT",
  ONBOARDING_COMPLETED: "ONBOARDING_COMPLETED",
  ONBOARDING_NOTIFICATIONS_PREFERENCES: "ONBOARDING_NOTIFICATIONS_PREFERENCES",
  ONBOARDING_NOTIFICATIONS_INFO_SCREEN_CONSENT:
    "ONBOARDING_NOTIFICATIONS_INFO_SCREEN_CONSENT",
  ONBOARDING_INSERT_EMAIL_SCREEN: "ONBOARDING_INSERT_EMAIL_SCREEN",
  ONBOARDING_EMAIL_VERIFICATION_SCREEN: "ONBOARDING_EMAIL_VERIFICATION_SCREEN",

  // Wallet
  WALLET_NAVIGATOR: "WALLET_NAVIGATOR",
  WALLET_HOME: "WALLET_HOME",
  WALLET_TRANSACTION_DETAILS: "WALLET_TRANSACTION_DETAILS",
  WALLET_CREDIT_CARD_DETAIL: "WALLET_CREDIT_CARD_DETAIL",
  WALLET_IDPAY_INITIATIVE_LIST: "WALLET_IDPAY_INITIATIVE_LIST",
  WALLET_BANCOMAT_DETAIL: "WALLET_BANCOMAT_DETAIL",
  WALLET_PAYPAL_DETAIL: "WALLET_PAYPAL_DETAIL",
  WALLET_PAYPAL_UPDATE_PAYMENT_PSP: "WALLET_PAYPAL_UPDATE_PAYMENT_PSP",
  WALLET_BPAY_DETAIL: "WALLET_BPAY_DETAIL",
  WALLET_COBADGE_DETAIL: "WALLET_COBADGE_DETAIL",
  WALLET_ADD_PAYMENT_METHOD: "WALLET_ADD_PAYMENT_METHOD",
  WALLET_ADD_CARD: "WALLET_ADD_CARD",
  WALLET_CONFIRM_CARD_DETAILS: "WALLET_CONFIRM_CARD_DETAILS",
  WALLET_CHECKOUT_3DS_SCREEN: "WALLET_CHECKOUT_3DS_SCREEN",
  ADD_CREDIT_CARD_OUTCOMECODE_MESSAGE: "ADD_CREDIT_CARD_OUTCOMECODE_MESSAGE",

  // Payment
  PAYMENTS_HOME: "PAYMENTS_HOME",
  PAYMENT_SCAN_QR_CODE: "PAYMENT_SCAN_QR_CODE",
  PAYMENT_MANUAL_DATA_INSERTION: "PAYMENT_MANUAL_DATA_INSERTION",
  PAYMENT_TRANSACTION_SUMMARY: "PAYMENT_TRANSACTION_SUMMARY",
  PAYMENT_TRANSACTION_ERROR: "PAYMENT_TRANSACTION_ERROR",
  PAYMENT_PICK_PAYMENT_METHOD: "PAYMENT_PICK_PAYMENT_METHOD",
  PAYMENT_CONFIRM_PAYMENT_METHOD: "PAYMENT_CONFIRM_PAYMENT_METHOD",
  PAYMENT_PICK_PSP: "PAYMENT_PICK_PSP",
  PAYMENTS_HISTORY_SCREEN: "PAYMENTS_HISTORY_SCREEN",
  PAYMENT_HISTORY_DETAIL_INFO: "PAYMENT_HISTORY_DETAIL_INFO",
  CREDIT_CARD_ONBOARDING_ATTEMPTS_SCREEN:
    "CREDIT_CARD_ONBOARDING_ATTEMPTS_SCREEN",
  CREDIT_CARD_ONBOARDING_ATTEMPT_DETAIL:
    "CREDIT_CARD_ONBOARDING_ATTEMPT_DETAIL",
  PAYMENT_OUTCOMECODE_MESSAGE: "PAYMENT_OUTCOMECODE_MESSAGE",

  // Main
  MAIN: "MAIN",

  // Profile
  SETTINGS_MAIN: "SETTINGS_MAIN",
  PROFILE_NAVIGATOR: "PROFILE_NAVIGATOR",
  PROFILE_MAIN: "PROFILE_MAIN",
  PROFILE_PRIVACY: "PROFILE_PRIVACY",
  PROFILE_PRIVACY_MAIN: "PROFILE_PRIVACY_MAIN",
  PROFILE_PRIVACY_SHARE_DATA: "PROFILE_PRIVACY_SHARE_DATA",
  PROFILE_PREFERENCES_HOME: "PROFILE_PREFERENCES_HOME",
  PROFILE_PREFERENCES_SERVICES: "PROFILE_PREFERENCES_SERVICES",
  PROFILE_DATA: "PROFILE_DATA",
  PROFILE_SECURITY: "PROFILE_SECURITY",
  PROFILE_PREFERENCES_EMAIL_FORWARDING: "PROFILE_PREFERENCES_EMAIL_FORWARDING",
  PROFILE_PREFERENCES_CALENDAR: "PROFILE_PREFERENCES_CALENDAR",
  PROFILE_PREFERENCES_LANGUAGE: "PROFILE_PREFERENCES_LANGUAGE",
  PROFILE_ABOUT_APP: "PROFILE_ABOUT_APP",
  PROFILE_LOGOUT: "PROFILE_LOGOUT",
  PROFILE_FISCAL_CODE: "PROFILE_FISCAL_CODE",
  PROFILE_DOWNLOAD_DATA: "PROFILE_DOWNLOAD_DATA",
  MARKDOWN_PLAYGROUND: "MARKDOWN_PLAYGROUND",
  PROFILE_REMOVE_ACCOUNT_INFO: "PROFILE_REMOVE_ACCOUNT_INFO",
  PROFILE_REMOVE_ACCOUNT_DETAILS: "PROFILE_REMOVE_ACCOUNT_DETAILS",
  PROFILE_REMOVE_ACCOUNT_SUCCESS: "PROFILE_REMOVE_ACCOUNT_SUCCESS",
  PROFILE_PREFERENCES_NOTIFICATIONS: "PROFILE_PREFERENCES_NOTIFICATIONS",

  // New Profile
  NEW_PROFILE: "NEW_PROFILE",

  // Barcode scan
  BARCODE_SCAN: "BARCODE_SCAN",

  // Misc
  GALLERY_PERMISSION_INSTRUCTIONS: "GALLERY_PERMISSION_INSTRUCTIONS",

  // Developer Mode
  DESIGN_SYSTEM: "DESIGN_SYSTEM",
  CGN_LANDING_PLAYGROUND: "CGN_LANDING_PLAYGROUND",
  TRIALS_SYSTEM_PLAYGROUND: "TRIAL_SYSTEM_PLAYGROUND",
  IDPAY_ONBOARDING_PLAYGROUND: "IDPAY_ONBOARDING_PLAYGROUND",
  LOLLIPOP_PLAYGROUND: "LOLLIPOP_PLAYGROUND",
  IDPAY_CODE_PLAYGROUND: "IDPAY_CODE_PLAYGROUND",
  IO_MARKDOWN_PLAYGROUND: "IO_MARKDOWN_PLAYGROUND",

  // Preferences
  INSERT_EMAIL_SCREEN: "INSERT_EMAIL_SCREEN",
  EMAIL_VERIFICATION_SCREEN: "EMAIL_VERIFICATION_SCREEN",
  PIN_SCREEN: "PIN_SCREEN",

  // Used when the App is in background
  BACKGROUND: "BACKGROUND",

  WORKUNIT_GENERIC_FAILURE: "WORKUNIT_GENERIC_FAILURE"
} as const;

export default ROUTES;
