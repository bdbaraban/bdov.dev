/**
 * Convert a Date to the datetime format used in <time>
 * @param date - The date to convert.
 */
const getDateTime = (date: Date): string => date.toISOString().split('T')[0];

export default getDateTime;
