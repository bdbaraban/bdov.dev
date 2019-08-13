import React, { ReactElement } from 'react';
import { Hero, HeroHead, HeroBody, HeroFoot, Title } from '../components';

const TitleSection = (): ReactElement => {
  return (
    <Hero id="title">
      <HeroHead />
      <HeroBody>
        <Title />
      </HeroBody>
      <HeroFoot className="has-text-centered" />
    </Hero>
  );
};

export default TitleSection;
