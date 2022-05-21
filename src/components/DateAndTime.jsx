/** @jsxImportSource theme-ui */
import React, { useEffect, useRef, useState } from 'react';
import { Box, Text } from 'theme-ui';
import MonthDayYear from './building-blocks/MonthDayYear';

const DateAndTime = ({ ...rest }) => {
  const [time, setTime] = useState('00:00:00');
  const initialTime = useRef();

  useEffect(() => {
    if (!initialTime.current) {
      initialTime.current = performance.now();
    }

    const timer = setInterval(() => {
      const now = performance.now();
      const ms = now - initialTime.current;

      const date = new Date(0);
      date.setMilliseconds(ms);
      setTime(date.toISOString().substring(11, 19));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box {...rest}>
      <MonthDayYear date={new Date()} />
      <Text>{time}</Text>
    </Box>
  );
};

export default DateAndTime;
