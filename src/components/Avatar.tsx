import React from 'react';
import Headshot from './Headshot';

/**
 * Name and headshot avatar
 */
const Avatar = (): React.ReactElement => {
  return (
    <div className="level-item has-text-centered">
      <div className="container">
        <h1 className="title is-3 has-text-white">Brennan D Baraban</h1>
        <div className="container is-flex is-hcentered">
          <figure className="image is-200x200">
            <Headshot />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
