import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Avatar, Code } from 'components';
import device from 'utils/device';

// Custom styled Bulma CSS hero
const StyledHero = styled.div`
  margin-bottom: 1.5em;
`;

// Custom styled Bulma CSS hero-body
const StyledHeroBody = styled.div`
  margin-left: 0 !important;
  margin-right: 0 !important;
  margin-top: 75px;
  @media (min-width: ${device.desktop}px) {
    margin-top: 0;
  }
`;

// Custom styled Bulma CSS hero-body
const StyledColumn = styled.div`
  padding-left: 0 !important;
  padding-right: 0 !important;
  @media (min-width: ${device.tablet}px) {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
`;

/**
 * Entry hero section
 */
const TitleSection = (): ReactElement => {
  return (
    <StyledHero id="title" className="hero is-fullheight">
      <div className="triangle" />
      <div className="hero-head" />
      <StyledHeroBody className="hero-body">
        <div className="level is-flex is-fullwidth is-hcentered">
          <div className="columns is-desktop is-fullwidth is-vcentered">
            <StyledColumn className="column is-full-touch is-one-half-desktop">
              <Avatar />
            </StyledColumn>
            <div id="code" className="column is-full-touch is-one-half-desktop">
              <Code />
            </div>
          </div>
        </div>
      </StyledHeroBody>
      <div className="hero-foot" />
    </StyledHero>
  );
};

export default TitleSection;
