import React, { ReactElement } from 'react';
import { Hero, HeroHead, HeroBody, HeroFoot } from '../components';

const AboutSection = (): ReactElement => {
  return (
    <Hero id="about">
      <HeroHead />
      <HeroBody></HeroBody>
      <HeroFoot className="has-text-centered" />
    </Hero>
  );
};

export default AboutSection;
