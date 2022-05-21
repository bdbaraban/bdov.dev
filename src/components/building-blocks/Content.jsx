/** @jsxImportSource theme-ui */
import React from 'react';
import { Flex } from 'theme-ui';

const Content = ({ children, sx, ...rest }) => (
  <Flex
    sx={{
      flexDirection: 'column',
      gap: 4,
      ...sx,
    }}
    {...rest}
  >
    {children}
  </Flex>
);

export default Content;
