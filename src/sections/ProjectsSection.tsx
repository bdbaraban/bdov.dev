import React, { ReactElement } from 'react';
import { FaGithub } from 'react-icons/fa';
import {
  Hero,
  HeroHead,
  HeroBody,
  HeroFoot,
  ProjectTile,
  TilesColumn,
  TitleColumn,
  Emoji
} from '../components';
import { IconLink, ProjectTileProps } from '../types';

/**
 * Personal projects hero section
 */
const ProjectsSection = (): ReactElement => {
  const icons: IconLink[] = [
    {
      href: 'https://github.com/bdbaraban',
      label: 'github',
      element: <FaGithub />
    }
  ];

  const projects: ProjectTileProps[] = [
    {
      title: 'IdeaDog',
      link: 'https://ideadog.site',
      github: 'https://github.com/bdbaraban/ideadog',
      emoji: <Emoji label="dog" symbol="🐕" />,
      description:
        'A social ideas platform. Front-end UI built using React, with TypeScript (built by yours truly), back-end API and server built in Rust, querying from an ArangoDB database (built by partner). Entirely functional components, asynchronous data fetching, passwordless authentication - a modern web app.',
      tools: ['React', 'TypeScript', 'Material-UI', 'Auth0']
    },
    {
      title: 'NextRX',
      github: 'https://github.com/bdbaraban/nextrx',
      emoji: <Emoji label="muscle" symbol="💪" />,
      description:
        'Full-stack Node.js CrossFit workout-tracking application. Integrates a server-side-rendered React app, MongoDB API and authenticated Express web server. Built on Next.js.',
      tools: ['Next.js', 'MongoDB', 'Express', 'Passport.js']
    },
    {
      title: 'Holbertonbnb',
      link: 'https://bdbnb.site',
      github: 'https://github.com/bdbaraban/holbertonbnb',
      emoji: <Emoji label="house" symbol="🏠" />,
      description:
        'RESTful API and website based on Airbnb. Back-end Flask app built in Python and MySQL, HTML/CSS front-end made dynamic with jQuery. Pair programmed over four versions. Manually deployed on Gunicorn and Nginx.',
      tools: ['Flask', 'MySQL', 'HTML/CSS', 'jQuery']
    },
    {
      title: 'Twenty Timer',
      link: 'https://snack.expo.io/@bdbaraban/twenty-timer',
      github: 'https://github.com/bdbaraban/twenty_timer',
      emoji: <Emoji label="eye" symbol="👁️" />,
      description:
        'A minimalist 20-20-20 eye care timer built in React Native Expo. Alerts 20-second breaks at 20-minute intervals. My first project working on mobile, and with React. Published on Expo Snack.',
      tools: ['React Native', 'Expo', 'JavaScript', 'MobX']
    }
  ];

  return (
    <Hero id="projects">
      <div className="triangle" />
      <HeroHead />
      <HeroBody>
        <TitleColumn title="Projects" icons={icons} />
        <TilesColumn>
          <div className="tile is-parent is-vertical">
            {projects.slice(0, 2).map(
              (project: ProjectTileProps, index: number): ReactElement => (
                <ProjectTile key={index} {...project} />
              )
            )}
          </div>
          <div className="tile is-parent is-vertical">
            {projects.slice(2, 4).map(
              (project: ProjectTileProps, index: number): ReactElement => (
                <ProjectTile key={index} {...project} />
              )
            )}
          </div>
        </TilesColumn>
      </HeroBody>
      <HeroFoot className="has-text-centered" />
    </Hero>
  );
};

export default ProjectsSection;
