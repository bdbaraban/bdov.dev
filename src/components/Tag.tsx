import React from 'react';
import { Skill } from './Skills';
import { FaStar } from 'react-icons/fa';

const Tag = ({ skill, interest }: Skill): React.ReactElement => {
  return (
    <span className="tag is-rounded">
      {skill}
      {interest && <FaStar className="fas fa-star tag-icon" />}
    </span>
  );
};

export default Tag;
