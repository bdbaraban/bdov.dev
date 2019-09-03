import React, { ReactElement } from 'react';
import { Skill } from 'components/Skills';
import { FaStar } from 'react-icons/fa';

/**
 * Skills Bulma CSS tag with possible 'interest' star
 */
const Tag = ({ skill, interest }: Skill): ReactElement => {
  return (
    <span className="tag is-rounded">
      {skill}
      {interest && <FaStar className="fas fa-star tag-icon" />}
    </span>
  );
};

export default Tag;
