import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

// Custom styled p element
const StyledP = styled.p`
  align-items: center;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`;

// Custom styled p element
const StyledA = styled.a`
  display: flex;
  padding-left: 7px;
`;

/**
 * Footer featuring site tech stack
 */
const Footer = (): ReactElement => {
  return (
    <footer className="footer content is-small has-text-white has-text-centered">
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
      <StyledP>
        bdov.dev{' '}
        <StyledA
          href="https://github.com/bdbaraban/bdov.dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="bdov.dev GitHub"
        >
          <FaGithub className="footer-icon" />
        </StyledA>
      </StyledP>
    </footer>
  );
};

export default Footer;
