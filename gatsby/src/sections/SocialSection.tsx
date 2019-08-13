import React, { ReactElement } from 'react';
import { Hero, HeroHead, HeroBody, HeroFoot, TitleColumn } from '../components';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const SocialSection = (): ReactElement => {
  const icons = [
    {
      href: 'https://twitter.com/bdov_',
      label: 'twitter',
      element: <FaTwitter />
    },
    {
      href: 'https://www.facebook.com/brennan.baraban',
      label: 'facebook',
      element: <FaFacebook />
    },
    {
      href: 'https://www.instagram.com/bdov_',
      label: 'instagram',
      element: <FaInstagram />
    }
  ];
  return (
    <Hero id="social">
      <HeroHead />
      <HeroBody>
        <TitleColumn title="Social" icons={icons} />
      </HeroBody>
      <HeroFoot className="has-text-centered" />
    </Hero>
  );
};

export default SocialSection;
