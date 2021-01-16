/** @jsx jsx */
import { jsx, Link } from 'theme-ui';

const CustomLink = ({ sx, children, ...rest }) => (
  <Link
    sx={{
      color: 'inherit',
      ':hover,:focus': {
        color: 'secondary',
      },
      ...sx,
    }}
    {...rest}
  >
    {children}
  </Link>
);

export default CustomLink;
