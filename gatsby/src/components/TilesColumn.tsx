import React, { ReactElement } from 'react';
import { Project } from '.';

const TilesColumn = (): ReactElement => {
  return (
    <div className="column is-full-touch is-two-thirds-desktop">
      <Project />
    </div>
  );
};

export default TilesColumn;
