import React, { ReactElement } from 'react';
import {
  Avatar,
  Code,
  Hero,
  HeroHead,
  HeroBody,
  HeroFoot
} from '../components';

/**
 * Entry hero section
 */
const TitleSection = (): ReactElement => {
  return (
    <Hero id="title">
      <div className="triangle" />
      <HeroHead />
      <HeroBody>
        <div className="level is-fullwidth">
          <Avatar />
          <Code />
        </div>
      </HeroBody>
      <HeroFoot className="has-text-centered" />
    </Hero>
  );
};

export default TitleSection;
