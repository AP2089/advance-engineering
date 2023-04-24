const {
  VITE_APP_CLIENT_URL,
  VITE_APP_SERVER_URL,
  VITE_APP_API_URL,
  VITE_APP_LOCALE,
} = import.meta.env;

export const clientUrl = VITE_APP_CLIENT_URL;
export const serverUrl = VITE_APP_SERVER_URL;
export const apiUrl = VITE_APP_API_URL;
export const locale = VITE_APP_LOCALE;