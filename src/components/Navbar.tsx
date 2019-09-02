import React, { ReactElement } from 'react';
import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { Logo, ProgressBar, ProgressCircle } from 'components';
import device from 'utils/device';

// Custom styled react-scroll Link
const StyledLink = styled(Link)`
  color: #fff;
  font-size: 1.25rem;
`;

// Custom styled level div
const StyledLevel = styled.div`
  align-items: center;
  justify-content: center !important;
  width: 100px;
`;

/**
 * Fixed navbar containing title logo and contact links
 */
const Navbar = (): ReactElement => {
  const isTablet = useMediaQuery({
    query: `(min-width: ${device.tablet}px)`
  });

  return (
    <nav className="navbar is-transparent is-fixed-top" role="navigation">
      <StyledLevel className="level">
        {isTablet ? <ProgressCircle /> : <ProgressBar />}
        <Logo />
      </StyledLevel>

      <StyledLevel className="level">
        <StyledLink
          to="contact"
          spy={true}
          smooth={true}
          duration={1000}
          tabIndex={0}
        >
          Contact
        </StyledLink>
      </StyledLevel>
    </nav>
  );
};

export default Navbar;
