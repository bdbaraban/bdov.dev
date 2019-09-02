import { MONTHS } from 'utils/constants';
/**
 * Convert a Date to a render-able string.
 * @param date - The date to convert.
 */
const getDateString = (date: Date): string =>
  `${MONTHS[date.getMonth()]} ${date.getDate() + 1}, ${date.getFullYear()}`;

export default getDateString;
