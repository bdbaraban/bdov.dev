import React, { ReactElement } from 'react';
import { Bio, Hero, HeroHead, HeroBody, HeroFoot, Skills } from '../components';

const AboutSection = (): ReactElement => {
  return (
    <Hero id="about">
      <div className="triangle" />
      <HeroHead />
      <HeroBody>
        <div className="columns is-desktop is-vcentered">
          <Bio />
          <Skills />
        </div>
      </HeroBody>
      <HeroFoot className="has-text-centered" />
    </Hero>
  );
};

export default AboutSection;
