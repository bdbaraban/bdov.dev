import React, { ReactElement } from 'react';
import Typist from 'react-typist';

/**
 * Animated code biography
 */
const Code = (): ReactElement => {
  return (
    <div className="level-item">
      <pre className="code-highlight">
        <Typist>
          <span className="keyword">const</span>{' '}
          <span className="punctuation">{'['}</span>
          bio, setBio
          <span className="punctuation">{']'}</span> ={' '}
          <span className="keyword">React</span>.
          <span className="function">useState</span>
          <span className="punctuation">{'('}</span>
          <span className="symbol">{'{}'}</span>
          <span className="punctuation">{')'}</span>
          {';'}
          <br />
          <br />
          <span className="function">setBio</span>
          <span className="punctuation">{'('}</span>
          <span className="symbol">{'{'}</span>
          <br />
          {'  '}
          what: <span className="string">'Software Engineer'</span>
          {','}
          <br />
          {'  '}
          where: <span className="string">'San Francisco Bay Area'</span>
          {', '}
          <br />
          {'  '}
          alumni: <span className="punctuation">{'['}</span>
          <span className="string">'UC Davis'</span>
          {', '}
          <span className="string">'Holberton School'</span>
          <span className="punctuation">{']'}</span>
          <br />
          <span className="symbol">{'}'}</span>
          <span className="punctuation">{')'}</span>
          {';'}
        </Typist>
      </pre>
    </div>
  );
};

export default Code;
