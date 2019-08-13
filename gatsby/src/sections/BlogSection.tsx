import React, { ReactElement } from 'react';
import { Hero, HeroHead, HeroBody, HeroFoot, TitleColumn } from '../components';
import { FaMedium } from 'react-icons/fa';

const BlogSection = (): ReactElement => {
  const icons = [
    {
      href: 'https://medium.com/@bdov_',
      label: 'medium',
      element: <FaMedium />
    }
  ];

  return (
    <Hero id="blog">
      <HeroHead />
      <HeroBody>
        <TitleColumn title="Blog" icons={icons} />
      </HeroBody>
      <HeroFoot className="has-text-centered" />
    </Hero>
  );
};

export default BlogSection;
