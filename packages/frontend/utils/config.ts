const API_PRODUCTION_URL = 'https://test1-npgw.onrender.com/';
const API_DEV_URL = 'https://test1-npgw.onrender.com/';

export const Config = {
  API_URL: process.env.NODE_ENV === 'production' ? API_PRODUCTION_URL : API_DEV_URL,
  GOOGLE_ANALYTICS_ID: 'G-MD706N8TZV',
};
