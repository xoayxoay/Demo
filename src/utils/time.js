import {
  parse,
  format,
  differenceInYears,
  addHours as addHoursDate,
  addDays as addDaysDate,
  getUnixTime,
  formatDistanceToNowStrict,
} from 'date-fns';

export const toDate = (time, dateFormat = 'MM/dd/yyyy') =>
  format(new Date(time), dateFormat);

export const toTime = (time, dateFormat = 'HH:mm:ss') =>
  format(new Date(time), dateFormat);

export const toDateAndTime = (time, dateFormat = 'MM/dd/yyyy HH:mm') =>
  format(new Date(time), dateFormat);

export const toYearOld = (date) => {
  try {
    // const result = parse(date, dateFormat, new Date());
    return differenceInYears(new Date(), new Date(date));
  } catch (e) {
    return false;
  }
};

export const toMinutesDuration = (duration) => {
  try {
    const minutes = parseInt(duration / 60, 10);
    const seconds = parseInt(duration % 60, 10);
    const result = {
      m: `0${minutes}`.slice(-2),
      s: `0${seconds}`.slice(-2),
    };
    return `${result.m}:${result.s}`;
  } catch (e) {
    return false;
  }
};

export const toDateParse = (date, dateFormat = 'MM/dd/yyyy') => {
  try {
    return parse(date, dateFormat, new Date());
  } catch (e) {
    return false;
  }
};

export const toTimestamp = (date) => getUnixTime(date);

export const addDays = (date, amount) => {
  try {
    const result = addDaysDate(new Date(date), amount);
    return result;
  } catch (e) {
    return false;
  }
};

export const addHours = (date, amount) => {
  try {
    const result = addHoursDate(new Date(date), amount);
    return result;
  } catch (e) {
    return false;
  }
};

export const timeDistanceNow = (time) =>
  formatDistanceToNowStrict(new Date(time), {
    addSuffix: true,
  });

export const timeDifference = (timePrevious) => {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerWeek = msPerDay * 7;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = Date.now() - new Date(timePrevious).getTime();

  if (elapsed < msPerMinute) {
    return `few seconds ago`;
  }
  if (elapsed < msPerHour) {
    return `${Math.round(elapsed / msPerMinute)} minutes ago`;
  }
  if (elapsed < msPerDay) {
    return `${Math.round(elapsed / msPerHour)} hours ago`;
  }
  if (elapsed > msPerWeek && elapsed < msPerWeek * 4) {
    return `${Math.round(elapsed / msPerWeek)} weeks ago`;
  }
  if (elapsed < msPerMonth) {
    return `${Math.round(elapsed / msPerDay)} days ago`;
  }
  if (elapsed < msPerYear) {
    return `${Math.round(elapsed / msPerMonth)} month ago`;
  }
  return `${Math.round(elapsed / msPerYear)} years ago`;
};
