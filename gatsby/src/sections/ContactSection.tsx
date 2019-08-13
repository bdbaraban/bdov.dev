import React, { ReactElement } from 'react';
import { Hero, HeroHead, HeroBody, HeroFoot } from '../components';

const ContactSection = (): ReactElement => {
  return (
    <Hero id="contact">
      <HeroHead />
      <HeroBody></HeroBody>
      <HeroFoot className="has-text-centered" />
    </Hero>
  );
};

export default ContactSection;
