import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { BlogTileProps } from '../types';
import { getDateString, getDateTime } from '../utils';
import { Emoji } from '.';

/**
 * Custom styled div for highlights
 */
const StyledDiv = styled.div`
  align-items: center;
`;

/**
 * Tile-card for blog articles
 */
const BlogTile = ({
  title,
  link,
  description,
  highlight,
  date,
  minutes,
  claps
}: BlogTileProps): ReactElement => {
  const dateTime = getDateTime(date);
  const dateString = getDateString(date);

  return (
    <article className="tile is-child card hvr-grow-shadow">
      <div className="card-content">
        <h6 className="title is-6">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h6>
        <div className="content is-small">{description}</div>
        {highlight && (
          <p className="content is-small is-flex">
            <Emoji label="star" symbol="⭐" />
            <p>{highlight}</p>
          </p>
        )}
        <div className="card-footer">
          <time
            className="card-footer-item has-text-centered"
            dateTime={dateTime}
          >
            {dateString}
          </time>
          <div className="card-footer-item has-text-centered">
            {minutes} min read
          </div>
          {claps && (
            <div className="card-footer-item has-text-centered">
              {`${claps} `}
              <Emoji label="clapping-hands" symbol="👏" />
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default BlogTile;
