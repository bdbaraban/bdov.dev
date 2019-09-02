import React, { ReactElement } from 'react';
import { IconContext } from 'react-icons';
import { IconLink } from 'utils/types';

// IconRow component prop types
interface IconRowProps {
  icons: IconLink[];
}

/**
 * Row of clickable icons displayed below section title
 */
const IconRow = ({ icons }: IconRowProps): ReactElement => {
  return (
    <div className="container is-inline-flex">
      {icons.map(
        (icon: IconLink, index: number): ReactElement => (
          <div key={index} className="column">
            <a
              href={icon.href}
              className="has-text-white hvr-grow"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={icon.label}
            >
              <IconContext.Provider value={{ style: { fontSize: '2.5rem' } }}>
                {icon.element}
              </IconContext.Provider>
            </a>
          </div>
        )
      )}
    </div>
  );
};

export default IconRow;
