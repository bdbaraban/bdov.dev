import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Emoji } from 'components';
import getDateString from 'utils/getDateString';
import getDateTime from 'utils/getDateTime';
import theme from 'utils/theme';
import { BlogCardProps } from 'utils/types';

// Custom styled Bulma CSS card
const StyledCard = styled.article`
  border: 6px solid ${theme.palette.yellow};
`;

/**
 * Card for blog articles
 */
const BlogCard = ({
  title,
  link,
  description,
  highlight,
  date,
  minutes,
  claps
}: BlogCardProps): ReactElement => {
  const dateTime = getDateTime(date);
  const dateString = getDateString(date);

  return (
    <StyledCard className="card hvr-grow-shadow has-text-left">
      <div className="card-content">
        <h6 className="title is-5">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h6>
        <div className="content">{description}</div>
        {highlight && (
          <p className="content is-flex">
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
    </StyledCard>
  );
};

export default BlogCard;
