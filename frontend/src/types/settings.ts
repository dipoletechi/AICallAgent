export interface UserSettings {
  TWILIO_ACCOUNT_SID: string;
  TWILIO_AUTH_TOKEN: string;
  TWILIO_PHONE_NUMBER: string;
  VAPI_API_KEY: string;
  VAPI_ASSISTANT_ID: string;
  VAPI_PHONE_NUMBER_ID: string;
}

export const defaultSettings: UserSettings = {
  TWILIO_ACCOUNT_SID: '',
  TWILIO_AUTH_TOKEN: '',
  TWILIO_PHONE_NUMBER: '',
  VAPI_API_KEY: '',
  VAPI_ASSISTANT_ID: '',
  VAPI_PHONE_NUMBER_ID: ''
};
