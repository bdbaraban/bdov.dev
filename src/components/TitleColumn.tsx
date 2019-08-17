import React, { ReactElement } from 'react';
import IconRow, { IconLink } from './IconRow';

/**
 * TitleColumn component prop types
 */
interface TitleColumnProps {
  title: string;
  icons: IconLink[];
}

/**
 * Left-justified section title and icon links column
 */
const TitleColumn = ({ title, icons }: TitleColumnProps): ReactElement => {
  return (
    <div className="column is-full-touch is-one-third-desktop is-paddingless has-text-centered">
      <div className="column">
        <h3 className="title is-3 is-marginless has-text-white">{title}</h3>
      </div>
      <IconRow icons={icons} />
    </div>
  );
};

export default TitleColumn;
