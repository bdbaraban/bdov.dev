/** @jsx jsx */
import { jsx } from 'theme-ui';

const Section = ({ children, sx, ...rest }) => (
  <div
    sx={{
      display: 'grid',
      gridGap: 4,
      maxWidth: '1000px',
      ...sx,
    }}
    {...rest}
  >
    {children}
  </div>
);

export default Section;
