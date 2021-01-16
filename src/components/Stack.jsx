/** @jsx jsx */
import { jsx } from 'theme-ui';

const Stack = ({ gap = 4, ...props }) => (
  <div
    {...props}
    sx={{
      display: 'grid',
      gridGap: gap,
    }}
  />
);

export default Stack;
