import React, { ReactElement } from 'react';
import { FaGlobe, FaGithub } from 'react-icons/fa';
import { ProjectTileProps } from '../types';

/**
 * Tile-card for personal projects
 */
const ProjectTile = ({
  title,
  emoji,
  link,
  github,
  description,
  tools
}: ProjectTileProps): ReactElement => {
  return (
    <article className="tile is-child card hvr-grow-shadow">
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
        <div className="content is-small">{description}</div>
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
    </article>
  );
};

export default ProjectTile;
