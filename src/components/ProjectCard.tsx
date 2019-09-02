import React, { ReactElement } from 'react';
import { FaGlobe, FaGithub } from 'react-icons/fa';
import styled from 'styled-components';
import theme from 'utils/theme';
import { ProjectCardProps } from 'utils/types';

// Custom styled Bulma CSS card
const StyledCard = styled.article`
  border: 6px solid ${theme.palette.brown};
`;

/**
 * Card for personal projects
 */
const ProjectCard = ({
  title,
  emoji,
  link,
  github,
  description,
  tools
}: ProjectCardProps): ReactElement => {
  return (
    <StyledCard className="card hvr-grow-shadow has-text-left">
      <header className="card-header">
        <h6 className="card-header-title">
          {title} {emoji}
        </h6>
        {link && (
          <a
            href={link}
            className="card-header-icon has-text-warning"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} URL`}
          >
            <FaGlobe className="project-icon" />
          </a>
        )}
        <a
          href={github}
          className="card-header-icon has-text-warning"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} GitHub`}
        >
          <FaGithub className="project-icon" />
        </a>
      </header>
      <div className="card-content">
        <div className="content">{description}</div>
      </div>
      <footer className="card-footer">
        {tools.map(
          (tool: string, index: number): ReactElement => (
            <div key={index} className="card-footer-item has-text-centered">
              {tool}
            </div>
          )
        )}
      </footer>
    </StyledCard>
  );
};

export default ProjectCard;
