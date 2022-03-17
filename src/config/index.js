export const NODE_ENV = 'production';
export const APP_URL_API =
  NODE_ENV === 'production' ? '' : 'https://localhost:6969/cryptizen/v1.0';
export const APP_URL_SOCKET =
  NODE_ENV === 'production' ? '' : 'https://localhost:6969';
export const APP_NAME = 'Cryptizen';
export const APP_NAME_EXPLORER = 'Cryptizen Explorer';
export const APP_DOMAIN = NODE_ENV === 'production' ? '' : '';
export const APP_TYPE = NODE_ENV === 'production' ? 'BETANET' : 'TESTNET';

export const CRYPTIZEN_SOCIAL = {
  facebook: 'https://www.facebook.com/Cryptizen',
  twitter: 'https://twitter.com/cryptizensocial',
  telegramChannel: 'https://t.me/+Z6mVXin2q5ZlMDJl',
  telegramCommunity: 'https://t.me/cryptizen_social',
};
