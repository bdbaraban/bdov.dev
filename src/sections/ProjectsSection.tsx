import React, { ReactElement } from 'react';
import { FaGithub } from 'react-icons/fa';
import styled from 'styled-components';
import {
  Arrow,
  CardContainer,
  IconRow,
  ProjectCard,
  SectionTitle,
  Emoji
} from 'components';
import theme from 'utils/theme';
import { IconLink, ProjectCardProps } from 'utils/types';

// Custom styled Bulma CSS hero-body
const StyledHeroBody = styled.div`
  padding-top: 0 !important;
  padding-bottom: 0 !important;
`;

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

  const projects: ProjectCardProps[] = [
    {
      title: 'IdeaDog',
      link: 'https://ideadog.site',
      github: 'https://github.com/bdbaraban/ideadog',
      emoji: <Emoji label="dog" symbol="🐕" />,
      description:
        'A social ideas platform. Front-end UI/UX designed and built using React, with TypeScript (built by yours truly), back-end API and server built in Rust, querying from an ArangoDB database (built by partner). Entirely functional components, asynchronous data fetching, passwordless authentication - a modern web app.',
      tools: ['React', 'TypeScript', 'Material-UI', 'Auth0', 'Parcel']
    },
    {
      title: 'NextRX',
      github: 'https://github.com/bdbaraban/nextrx',
      emoji: <Emoji label="muscle" symbol="💪" />,
      description:
        'Full-stack Node.js CrossFit workout-tracking application. Integrates a server-side-rendered React app, MongoDB API and authenticated Express web server. Built on Next.js.',
      tools: [
        'Next.js',
        'TypeScript',
        'MongoDB',
        'Express.js',
        'Passport.js',
        'Grommet'
      ]
    },
    {
      title: 'Holbertonbnb',
      link: 'https://bdbnb.site',
      github: 'https://github.com/bdbaraban/holbertonbnb',
      emoji: <Emoji label="house" symbol="🏠" />,
      description:
        'RESTful API and website based on Airbnb. Back-end Flask app built in Python and MySQL, HTML/CSS front-end made dynamic with jQuery. Pair programmed over four versions. Manually deployed on Gunicorn and Nginx.',
      tools: ['Flask', 'MySQL', 'HTML/CSS', 'jQuery', 'Nginx', 'Gunicorn']
    },
    {
      title: 'Twenty Timer',
      link: 'https://expo.io/@bdbaraban/twenty-timer',
      github: 'https://github.com/bdbaraban/twenty-timer',
      emoji: <Emoji label="eye" symbol="👁️" />,
      description:
        'A minimalist 20-minute/20-second eye care timer built in React Native Expo. Alerts 20-second breaks at 20-minute intervals. Published on Expo with a CircleCI workflow.',
      tools: [
        'React Native',
        'Expo',
        'TypeScript',
        'MobX',
        'React Testing Library',
        'CircleCI'
      ]
    },
    {
      title: 'shellby',
      github: 'https://github.com/bdbaraban/simple_shell',
      emoji: <Emoji label="spiral-shell" symbol="🐚️" />,
      description:
        'Simple UNIX shell built in C. Pair programmed for the Holberton School year one curriculum. Implements advanced features including PATH handling, command separators, history and more.',
      tools: ['C', 'Valgrind', 'Unix', 'Linux']
    }
  ];

  return (
    <section id="projects" className="hero">
      <StyledHeroBody className="hero-body">
        <div className="level is-flex is-fullwidth is-hcentered">
          <div className="columns is-desktop is-fullwidth is-vcentered">
            <div className="column is-full-touch is-one-quarter-desktop is-block has-text-centered">
              <SectionTitle title="Projects" />
              <IconRow icons={icons} />
            </div>
            <div className="column is-full-touch is-three-quarters-desktop is-paddingless has-text-centered">
              <CardContainer>
                {projects.map(
                  (project, index): ReactElement => {
                    return <ProjectCard key={index} {...project} />;
                  }
                )}
              </CardContainer>
              <Arrow color={theme.palette.brown} />
            </div>
          </div>
        </div>
      </StyledHeroBody>
    </section>
  );
};

export default ProjectsSection;
