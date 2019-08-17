import React, { ReactElement } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

/**
 * ScrollArrow component prop types
 */
interface ScrollArrowProps {
  section: string;
  direction?: string;
}

/**
 * Functional scroll-to arrow
 */
const ScrollArrow = ({
  section,
  direction = 'down'
}: ScrollArrowProps): ReactElement => {
  return (
    <div className="hero-foot has-text-centered">
      <Link
        className="has-text-white"
        to={section}
        spy={true}
        smooth={true}
        duration={1000}
        tabIndex={0}
      >
        {direction === 'down' ? (
          <FaAngleDown className="scroll-arrow" />
        ) : (
          <FaAngleUp className="scroll-arrow" />
        )}
      </Link>
    </div>
  );
};

export default ScrollArrow;
