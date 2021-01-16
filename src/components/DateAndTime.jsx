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

const HomeSection = ({ ...rest }) => {
  const [time, setTime] = useState('00:00:00');
  const initialTime = useRef(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const newTime = now.getSeconds() - initialTime.current.getSeconds();
      setTime(new Date(newTime * 1000).toISOString().substr(11, 8));
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

export default HomeSection;
