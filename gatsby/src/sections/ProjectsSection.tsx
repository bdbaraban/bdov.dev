import React, { ReactElement } from 'react';
import {
  Hero,
  HeroHead,
  HeroBody,
  HeroFoot,
  TilesColumn,
  TitleColumn
} from '../components';
import { FaGithub } from 'react-icons/fa';

const ProjectsSection = (): ReactElement => {
  const icons = [
    {
      href: 'https://github.com/bdbaraban',
      label: 'github',
      element: <FaGithub />
    }
  ];

  return (
    <Hero id="projects">
      <HeroHead />
      <HeroBody>
        <TitleColumn title="Projects" icons={icons} />
        <TilesColumn />
      </HeroBody>
      <HeroFoot className="has-text-centered" />
    </Hero>
  );
};

export default ProjectsSection;
