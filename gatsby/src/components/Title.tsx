import React from 'react';
import Headshot from './Headshot';

const Title = (): React.ReactElement => {
  return (
    <div className="column is-full-touch is-one-third-desktop is-centered">
      <h1 className="title is-3 has-text-centered has-text-white">
        Brennan D Baraban
      </h1>
      <div className="container is-flex is-horizontal-center">
        <figure className="image is-200x200">
          <Headshot />
        </figure>
      </div>
    </div>
  );
};

export default Title;
