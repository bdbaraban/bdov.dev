import React, { ReactElement } from 'react';
import { Emoji } from 'components';

/**
 * 'About Me' biography
 */
const Bio = (): ReactElement => {
  return (
    <div className="column is-full-touch is-half has-text-centered">
      <div className="title is-3 has-text-white">About Me</div>
      <div className="content bio has-text-white">
        I am a software engineer based in the San Francisco Bay Area. I develop
        full-stack with a particular love for front-end, especially React{' '}
        <Emoji label="atom-symbol" symbol="⚛️" />. Currently, I work mostly in
        the modern JavaScript/Node.js ecosystem and Python, but I am always
        interested in learning more, new, exciting technologies.
        <br />
        <br />
        In my work, I try my best to bring creativity and personality; my recent
        project,{' '}
        <a
          className="has-text-warning"
          href="https://ideadog.site"
          target="_blank"
          rel="noopener noreferrer"
        >
          IdeaDog
        </a>
        , is a fun social media ideas application inspired by my dog-related
        entrepreneurial ideas <Emoji label="dog" symbol="🐕" />. In general, I
        am a think-outside-the-box programmer constantly looking to iterate and
        improve code.
        <br />
        <br />
        When I&apos;m not plugging away at a new React app, you&apos;ll most
        likely find me watching my beloved New York Yankees, at my local
        CrossFit gym, or on my PlayStation{' '}
        <Emoji label="baseball" symbol="⚾" />
        <Emoji label="muscle" symbol="💪" />
        <Emoji label="video-game" symbol="🎮" />. I love coding, but know myself
        too well - I&apos;ll obsess over it daily - and pay active mind to
        spending good time with good people while maintaining a healthful
        work-life balance.
      </div>
    </div>
  );
};

export default Bio;
