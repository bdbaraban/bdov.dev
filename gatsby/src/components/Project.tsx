import React, { ReactElement } from 'react';
import Draggable from 'react-draggable';

const Project = (): ReactElement => {
  return (
    <Draggable>
      <article className="tile is-child card draggable">
        <header className="card-header">
          <h6 className="card-header-title">IdeaDog 🐕</h6>
          <a
            href="https://ideadog.site"
            className="card-header-icon has-text-warning"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="IdeaDog URL"
          >
            <span className="icon is-medium">
              <i className="fas fa-globe fa-2x" aria-hidden="true"></i>
            </span>
          </a>
          <a
            href="https://github.com/bdbaraban/ideadog"
            className="card-header-icon has-text-warning"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="IdeaDog GitHub"
          >
            <span className="icon is-medium">
              <i className="fab fa-github fa-2x" aria-hidden="true"></i>
            </span>
          </a>
        </header>
        <div className="card-content">
          <div className="content is-small">
            A social ideas platform. Front-end UI built using React, with
            TypeScript (built by yours truly), back-end API and server built in
            Rust, querying from an ArangoDB database (built by partner).
            Entirely functional components, asynchronous data fetching,
            passwordless authentication - a modern web app.
          </div>
        </div>
        <footer className="card-footer">
          <div className="card-footer-item has-text-centered">React</div>
          <div className="card-footer-item has-text-centered">TypeScript</div>
          <div className="card-footer-item has-text-centered">Material-UI</div>
          <div className="card-footer-item has-text-centered">Auth0</div>
        </footer>
      </article>
    </Draggable>
  );
};

export default Project;
