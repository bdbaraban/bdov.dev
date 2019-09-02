import React, { HTMLAttributes, ReactElement } from 'react';

// Emoji component prop types
interface EmojiProps extends HTMLAttributes<HTMLSpanElement> {
  label?: string;
  symbol: string;
}

/**
 * Generic a11y-friendly Emoji component
 */
const Emoji = ({ label, symbol, ...rest }: EmojiProps): ReactElement => (
  <span
    aria-hidden={label !== undefined ? undefined : 'true'}
    aria-label={label}
    role="img"
    {...rest}
  >
    {symbol}
  </span>
);

export default Emoji;
