export const OAUTH_ACTIVE = process.env.REACT_APP_OAUTH_ACTIVE === 'true' ?? false;
export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? '';
export const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI ?? '';
export const INFOBIP_API_BASE_URL = 'https://' + process.env.REACT_APP_ACCOUNT_DOMAIN_API;
export const INFOBIP_API_KEY = process.env.REACT_APP_ACCOUNT_API_KEY ?? '';
export const CONVERSATIONS_INTEGRATION_ENABLED = process.env.REACT_APP_CONVERSATIONS_INTEGRATION === 'true' ?? false;

export const API_RESERVATIONS_PATH = 'exchange/restaurant/reservations';
export const API_CONFIG_PATH = 'exchange/restaurant/config';