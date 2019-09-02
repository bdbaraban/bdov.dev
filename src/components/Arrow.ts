import ArrowSvg from 'assets/images/arrow.svg';
import styled from 'styled-components';

// Arrow component prop types
interface ArrowProps {
  color: string;
}

/**
 * Resized and colored arrow svg
 */
const Arrow = styled(ArrowSvg)`
  color: ${({ color }: ArrowProps): string => color};
  width: 8rem;
`;

export default Arrow;
