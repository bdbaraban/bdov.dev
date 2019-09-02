import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Bio, Skills } from 'components';

// Custom styled Bulma CSS hero-body
const StyledHeroBody = styled.div`
  padding-top: 2.5em;
  padding-bottom: 2.5em;
`;

/**
 * 'About Me' and skill tags hero section
 */
const AboutSection = (): ReactElement => {
  return (
    <section id="about" className="hero">
      <StyledHeroBody className="hero-body">
        <div className="level is-flex is-fullwidth is-hcentered">
          <div className="columns is-desktop is-vcentered">
            <Bio />
            <Skills />
          </div>
        </div>
      </StyledHeroBody>
    </section>
  );
};

export default AboutSection;
