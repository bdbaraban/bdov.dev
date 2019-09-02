import React, { ReactElement } from 'react';
import styled from 'styled-components';

// Custom styled Bulma CSS container
const StyledDiv = styled.div`
  margin-bottom: 4px !important;
`;

// SectionTitle component prop types
interface SectionTitle {
  title: string;
}

/**
 * Section title container
 */
const SectionTitle = ({ title }: SectionTitle): ReactElement => {
  return (
    <StyledDiv className="container">
      <h3 className="title is-3 is-marginless has-text-white">{title}</h3>
    </StyledDiv>
  );
};

export default SectionTitle;
