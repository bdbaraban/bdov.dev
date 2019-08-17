// Constant months codex
const MONTHS = [
  'Jan.',
  'Feb.',
  'Mar.',
  'Apr.',
  'May',
  'June',
  'July',
  'Aug.',
  'Sep.',
  'Oct.',
  'Nov.',
  'Dec.'
];

/**
 * Convert a Date to a render-able string.
 * @param date - The date to convert.
 */
export const getDateString = (date: Date): string =>
  `${MONTHS[date.getMonth()]} ${date.getDate() + 1}, ${date.getFullYear()}`;

/**
 * Convert a Date to the datetime format used in <time>
 * @param date - The date to convert.
 */
export const getDateTime = (date: Date): string => {
  let dateTime = `${date.getFullYear()}-`;

  if (date.getMonth() >= 9) {
    dateTime += `${date.getMonth() + 1}-`;
  } else {
    dateTime += `0${date.getMonth() + 1}-`;
  }

  if (date.getDate() >= 9) {
    dateTime += `${date.getDate() + 1}`;
  } else {
    dateTime += `0${date.getDate() + 1}`;
  }

  return dateTime;
};
