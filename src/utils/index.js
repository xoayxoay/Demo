import sanitizeHtml from 'sanitize-html';
import { hashtag, userQuery, emoji } from './regex';

export const authCheck = () => {
  const user = localStorage.getItem('@userToken');

  return !!user;
};

export const lottieConfig = {
  loop: true,
  autoplay: true,
  // eslint-disable-next-line global-require
  // animationData: require('assets/lottie/not-found.json'),
  animationData: null,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export const windowScroll = (id) => {
  const section = document.getElementById(id);
  section?.scrollIntoView({ behavior: 'smooth' });
};

export const truncate = (str, n) =>
  str?.length > n ? `${str.substr(0, n - 1)}...` : str;

export const capitalize = ([first, ...rest]) =>
  first.toUpperCase() + rest.join('').toLowerCase();

export async function copyTextToClipboard(text) {
  if ('clipboard' in navigator) {
    await navigator.clipboard.writeText(text);
    return true;
  }
  return document.execCommand('copy', true, text);
}

export const cleanPostTag = (str) =>
  sanitizeHtml(str, {
    allowedTags: ['div', 'br'],
  });

export const convertToPostContent = (str) => {
  let result = cleanPostTag(str);
  result = result.replaceAll(' ', '&nbsp;');
  result = result.replaceAll('\n', '<br />');
  result = result.replace(
    hashtag,
    '<span class="text-primary cursor-pointer" hashtag="$1">$1</span>',
  );
  result = result.replace(userQuery, '<span class="text-primary">$1</span>');
  result = result.replace(emoji, '<span class="text-lg">$&</span>');

  return result;
};

export const formatPrice = ({ price, currency = 'USD', code = 'en' }) =>
  price?.toLocaleString(code, { style: 'currency', currency });

export const cleanHashtag = (str) => {
  const result = str.replace('#', '');
  return result;
};
