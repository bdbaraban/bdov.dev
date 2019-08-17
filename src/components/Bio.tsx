import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Emoji } from '.';

/**
 * Custom styled bio div
 */
const StyledDiv = styled.div`
  margin: 0 auto;
  width: 80%;
`;

/**
 * 'About Me' biography
 */
const Bio = (): ReactElement => {
  return (
    <div className="column is-full-touch is-half has-text-centered">
      <div className="title is-3 has-text-white">About Me</div>
      <StyledDiv className="content has-text-white bio">
        I am a software engineer based in the San Francisco Bay Area. I develop
        full-stack with a particular love for front-end, especially React{' '}
        <Emoji label="atom-symbol" symbol="⚛️" />. Currently, I work mostly in
        the modern ES6 ecosystem and Python, but I am always interested in
        learning more, new, exciting technologies.
        <br />
        <br />
        I find intuitive, delightful web applications inspiring. I try to bring
        creativity and personality to my work - my recent project, IdeaDog, is a
        fun social media ideas application inspired by my dog-related
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
        spending good time with good people while maintaining a healtful
        work-life balance.
      </StyledDiv>
    </div>
  );
};

export default Bio;