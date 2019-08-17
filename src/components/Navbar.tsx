import React, { ReactElement } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { Logo, ProgressCircle } from '.';

/**
 * Custom styled react-scroll Link
 */
const StyledLink = styled(Link)`
  color: #fff;
  font-size: 1.25rem;
  margin-right: 1em;
`;

/**
 * Navbar component prop types
 */
interface NavbarProps {
  scrollPosition: number;
}

/**
 * Fixed navbar containing title logo and contact links
 */
const Navbar = ({ scrollPosition }: NavbarProps): ReactElement => {
  return (
    <nav className="navbar is-fixed-top is-transparent" role="navigation">
      <div className="level">
        <ProgressCircle scroll={scrollPosition} />
        <Logo />
      </div>

      <StyledLink
        to="contact"
        spy={true}
        smooth={true}
        duration={1000}
        tabIndex={0}
      >
        Contact
      </StyledLink>
    </nav>
  );
};

export default Navbar;
