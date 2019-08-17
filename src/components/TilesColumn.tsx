import React, { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';

/**
 * Ancestor tile column wrapper
 */
const TilesColumn = ({
  children
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>): ReactElement => {
  return (
    <div className="column is-full-touch is-two-thirds-desktop">
      <div className="tile is-ancestor">
        <div className="tile">{children}</div>
      </div>
    </div>
  );
};

export default TilesColumn;
