import React, { ReactElement } from 'react';

/**
 * Emoji component prop types
 */
interface EmojiProps {
  label: string;
  symbol: string;
}

/**
 * Generic a11y-friendly Emoji component
 */
const Emoji = ({ label, symbol }: EmojiProps): ReactElement => (
  <span
    className="emoji"
    role="img"
    aria-label={label ? label : ''}
    aria-hidden={label ? 'false' : 'true'}
  >
    {symbol}
  </span>
);

export default Emoji;
