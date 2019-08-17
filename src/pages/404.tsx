import React, { ReactElement } from 'react';
import { Emoji, SEO } from '../components';
import '../scss/main.scss';

/**
 * 404 page
 */
const NotFoundPage = (): ReactElement => (
  <>
    <SEO title="Not Found" />
    <div className="container is-centered">
      <h1 className="title is-1 has-text-white">NOT FOUND</h1>
      <p className="content">
        You just hit a route that doesn&#39;t exist... the sadness.
        <Emoji label="crying-face" symbol="😢" />
      </p>
    </div>
  </>
);

export default NotFoundPage;
