import React, { ReactElement } from 'react';
import { FaTwitter } from 'react-icons/fa';
import { SocialTileProps } from '../types';
import { getDateString, getDateTime } from '../utils';

/**
 * Tile-card for social posts
 */
const SocialTile = ({ link, content, date }: SocialTileProps): ReactElement => {
  const dateTime = getDateTime(date);
  const dateString = getDateString(date);

  return (
    <article className="tile is-child card hvr-grow-shadow">
      <div className="card-content">
        {content}
        <div className="card-footer">
          <time
            className="card-footer-item has-text-centered"
            dateTime={dateTime}
          >
            {dateString}
          </time>
          <div className="card-footer-item has-text-centered">
            <a
              href={link}
              className="card-header-icon"
              aria-label={`Tweet ${dateString}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SocialTile;
