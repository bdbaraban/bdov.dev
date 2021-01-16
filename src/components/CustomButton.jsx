/** @jsx jsx */
import { Button, jsx } from 'theme-ui';

const CustomButton = ({ isActive, sx, children, ...rest }) => (
  <Button
    sx={{
      display: 'inline-flex',
      appearance: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: isActive ? 'primary' : 'transparent',
      color: isActive ? 'background' : 'text',
      cursor: 'pointer',
      fontWeight: 'semibold',
      transition: 'all 250ms',
      lineHeight: '1.2',
      borderRadius: 'md',
      width: '100%',
      '&:focus': {
        boxShadow: 'outline',
      },
      '&:hover': {
        backgroundColor: !isActive ? '#f3f4f5' : '#0c1c29',
      },
      ...sx,
    }}
    {...rest}
  >
    {children}
  </Button>
);

export default CustomButton;
