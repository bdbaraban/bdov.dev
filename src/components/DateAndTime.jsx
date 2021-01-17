/** @jsx jsx */
import { useEffect, useRef, useState } from 'react';
import { Box, jsx, Text } from 'theme-ui';

const formatToday = () => {
  const datetime = new Date();
  const month = datetime.getMonth() + 1;
  const day = datetime.getDate();
  const year = datetime.getFullYear();
  return `${month}/${day}/${year}`;
};

const DateAndTime = ({ ...rest }) => {
  const [time, setTime] = useState('00:00:00');
  const initialTime = useRef();

  useEffect(() => {
    if (!initialTime.current) {
      initialTime.current = new Date();
    }

    const timer = setInterval(() => {
      const now = new Date();
      const passed = new Date(now - initialTime.current);
      setTime(passed.toISOString().substr(11, 8));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box {...rest}>
      <Text>{formatToday()}</Text>
      <Text>{time}</Text>
    </Box>
  );
};

export default DateAndTime;
