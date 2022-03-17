import { APP_DOMAIN } from 'config';

export const routeTransform = (route, pathValues = []) => {
  const routeArr = route.split('/');
  let pathIdx = 0;

  return routeArr
    .map((str) => {
      if (str.charAt(0) === ':') {
        const res = pathValues[pathIdx] || str;
        pathIdx += 1;
        return res;
      }
      return str;
    })
    .join('/');
};

export const routeTransformCryptizen = (route, pathValues = []) =>
  `${APP_DOMAIN}${routeTransform(route, pathValues)}`;

export const getBasePathName = (str) => {
  const routeArr = str.split('/');
  // /profile/123123 -> /profile
  return `/${routeArr[1]}`;
};
