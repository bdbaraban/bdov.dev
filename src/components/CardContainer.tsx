import React, { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';
import styled from 'styled-components';

// Custom styled Bulma CSS container
const StyledContainer = styled.div`
  align-items: center;
  overflow-x: scroll;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    width: 0;
  }
  scrollbar-width: none;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  width: 100% !important;
  @media (min-width: 769px) {
    width: 90% !important;
  }
`;

/**
 * Scrollable card container
 */
const CardContainer = ({
  children
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>): ReactElement => {
  return (
    <StyledContainer className="container is-flex">{children}</StyledContainer>
  );
};

export default CardContainer;
