import styled from 'styled-components';
import theme from 'utils/theme';

const Divider = styled.hr`
  border-top: 6px solid ${theme.palette.purple};
  margin: 2.5em auto 2.5em;
  width: 80%;
`;

export default Divider;
