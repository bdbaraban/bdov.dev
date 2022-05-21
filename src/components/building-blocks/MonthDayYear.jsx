/** @jsxImportSource theme-ui */
import React from 'react';
import { Text } from 'theme-ui';

const formatDate = (date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

const MonthDayYear = ({
  children = (formattedDate) => formattedDate,
  date,
  ...rest
}) => <Text {...rest}>{children(formatDate(date))}</Text>;

export default MonthDayYear;
