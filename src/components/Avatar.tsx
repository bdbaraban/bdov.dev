import React, { ReactElement } from 'react';
import { Headshot } from 'components';

/**
 * Name and headshot avatar
 */
const Avatar = (): ReactElement => {
  return (
    <div className="container has-text-centered">
      <h1 className="title is-3 has-text-white">Brennan D Baraban</h1>
      <div className="container is-flex is-hcentered">
        <figure className="image is-200x200">
          <Headshot />
        </figure>
      </div>
    </div>
  );
};

export default Avatar;
