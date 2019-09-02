import React, { ReactElement } from 'react';
import styled from 'styled-components';

// Custom styled container
const StyledDiv = styled.div`
  max-width: 80%;
`;

/**
 * Footer featuring site tech stack
 */
const Footer = (): ReactElement => {
  return (
    <footer className="footer">
      <StyledDiv className="content has-text-centered has-text-white">
        <p>
          Made with{' '}
          <a
            className="has-text-warning"
            href="https://www.gatsbyjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GatsbyJS
          </a>{' '}
          and{' '}
          <a
            className="has-text-warning"
            href="https://bulma.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bulma CSS
          </a>
          .
          <br /> Deployed on{' '}
          <a
            className="has-text-warning"
            href="https://zeit.co/now"
            target="_blank"
            rel="noopener noreferrer"
          >
            ZEIT Now
          </a>
          .
        </p>
      </StyledDiv>
    </footer>
  );
};

export default Footer;
