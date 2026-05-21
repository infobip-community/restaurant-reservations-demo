export const OAUTH_ACTIVE = import.meta.env.VITE_OAUTH_ACTIVE === 'true';
export const CLIENT_ID = import.meta.env.VITE_CLIENT_ID ?? '';
export const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI ?? '';
export const INFOBIP_API_BASE_URL = 'https://' + import.meta.env.VITE_ACCOUNT_DOMAIN_API;
export const INFOBIP_API_KEY = import.meta.env.VITE_ACCOUNT_API_KEY ?? '';
export const CONVERSATIONS_INTEGRATION_ENABLED = import.meta.env.VITE_CONVERSATIONS_INTEGRATION === 'true';

export const API_RESERVATIONS_PATH = 'exchange/restaurant/reservations';
export const API_CONFIG_PATH = 'exchange/restaurant/config';
