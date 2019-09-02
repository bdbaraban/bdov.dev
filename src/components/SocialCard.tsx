import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { FaTwitter } from 'react-icons/fa';
import getDateString from 'utils/getDateString';
import getDateTime from 'utils/getDateTime';
import theme from 'utils/theme';
import { SocialCardProps } from 'utils/types';

// Custom styled Bulma CSS card
const StyledCard = styled.article`
  border: 6px solid ${theme.palette.black};
`;

/**
 * Card for social posts
 */
const SocialTile = ({ link, content, date }: SocialCardProps): ReactElement => {
  const dateTime = getDateTime(date);
  const dateString = getDateString(date);

  return (
    <StyledCard className="card hvr-grow-shadow has-text-left">
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
    </StyledCard>
  );
};

export default SocialTile;
