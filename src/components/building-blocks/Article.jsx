/** @jsxImportSource theme-ui */
import React from 'react';
import { Box, Heading } from 'theme-ui';

const Article = ({ children, icon, title, subtitle, sx, ...rest }) => (
  <article sx={{ display: 'grid', gridGap: 4, ...sx }} {...rest}>
    <Box>
      <Heading as="h2">
        {icon}
        {icon && ' '}
        {title}
      </Heading>
      <small>{subtitle}</small>
    </Box>
    {children}
  </article>
);

export default Article;
